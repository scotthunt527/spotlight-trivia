/* ================================================================
   CATEGORY QUIZ ENGINE
   Requires js/shared.js (seededRNG, dateSeed) and js/bank.js (BANK)
   to be loaded before this file.

   Usage: category-quiz/index.html?cat=movies
================================================================ */

/* ================================================================
   CATEGORY METADATA
================================================================ */
const CAT_META = {
    movies: { label: 'Movies',      icon: '🎬', color: '#F0B429' },
    tv:     { label: 'TV Shows',    icon: '📺', color: '#A78BFA' },
    music:  { label: 'Music',       icon: '🎵', color: '#34D399' },
    celeb:  { label: 'Celebrity',   icon: '⭐', color: '#F472B6' },
    pop:    { label: 'Pop Culture', icon: '🌟', color: '#60A5FA' },
};

// Unique seed offset per category so each category's daily pick is independent.
const CAT_SEED_OFFSETS = { movies: 1, tv: 2, music: 3, celeb: 4, pop: 5 };

const QUESTIONS_PER_ROUND = 5;

/* ================================================================
   RESOLVE CATEGORY FROM URL PARAM  (?cat=movies)
================================================================ */
const currentCat = (function () {
    const raw = new URLSearchParams(window.location.search).get('cat') || '';
    return CAT_META[raw] ? raw : 'movies';
}());

const catInfo = CAT_META[currentCat];

/* ================================================================
   DAILY QUESTION SELECTION — category-specific seeded shuffle
================================================================ */
function getCatDailyQuestions() {
    const seed = dateSeed() * 10 + CAT_SEED_OFFSETS[currentCat];
    const rng  = seededRNG(seed);
    const pool = BANK.filter(q => q.cat === currentCat);
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool.slice(0, QUESTIONS_PER_ROUND);
}

/* ================================================================
   PERSISTENCE — category-scoped localStorage keys
================================================================ */
function catTodayKey() {
    const d = new Date();
    return `spotlight_cat_${currentCat}_${d.getFullYear()}_${d.getMonth() + 1}_${d.getDate()}`;
}

function getCatStats() {
    try {
        const raw = localStorage.getItem(`spotlight_cat_${currentCat}_stats`);
        return raw ? JSON.parse(raw) : { streak: 0, best: 0, played: 0, lastDate: '' };
    } catch {
        return { streak: 0, best: 0, played: 0, lastDate: '' };
    }
}

function saveCatStats(s) {
    localStorage.setItem(`spotlight_cat_${currentCat}_stats`, JSON.stringify(s));
}

function saveCatTodayResult(scr, answers) {
    localStorage.setItem(catTodayKey(), JSON.stringify({ score: scr, answers }));
}

function getCatTodayResult() {
    try {
        const raw = localStorage.getItem(catTodayKey());
        return raw ? JSON.parse(raw) : null;
    } catch {
        return null;
    }
}

/* ================================================================
   GAME STATE
================================================================ */
let questions    = [];
let qIndex       = 0;
let score        = 0;
let answerLog    = [];
let shuffledOpts = [];
let correctDisp  = 0;

/* ================================================================
   INIT
================================================================ */
function init() {
    // Apply category accent colour as a CSS custom property
    document.documentElement.style.setProperty('--cat-accent', catInfo.color);

    const d = new Date();
    document.getElementById('headerDate').textContent =
        d.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    // Stamp category info into the page
    document.title = `SPOTLIGHT — Daily ${catInfo.label} Quiz`;
    document.getElementById('catIcon').textContent    = catInfo.icon;
    document.getElementById('catLabel').textContent   = catInfo.label;
    document.getElementById('playedIcon').textContent = catInfo.icon;

    const stats = getCatStats();
    document.getElementById('splashStreak').textContent = stats.streak;
    document.getElementById('splashBest').textContent   = stats.best ? `${stats.best}/5` : '—';

    const result = getCatTodayResult();
    if (result) { showPlayedScreen(result); }

    tickCountdown();
    setInterval(tickCountdown, 1000);
}

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

/* ================================================================
   SPLASH → GAME
================================================================ */
function startGame() {
    questions = getCatDailyQuestions();
    qIndex    = 0;
    score     = 0;
    answerLog = [];
    showScreen('scr-game');
    renderQuestion();
}

/* ================================================================
   RENDER QUESTION
================================================================ */
function renderQuestion() {
    const q = questions[qIndex];

    document.getElementById('qNum').textContent     = qIndex + 1;
    document.getElementById('scoreNum').textContent = score;
    document.getElementById('pbar').style.width     = `${(qIndex / QUESTIONS_PER_ROUND) * 100}%`;

    const catEl = document.getElementById('qCat');
    catEl.style.color = catInfo.color;
    catEl.textContent = `${q.icon} ${q.label}`;

    document.getElementById('qText').textContent = q.q;

    // Shuffle display order (does not affect seeded daily selection)
    const indexed = q.opts.map((opt, i) => ({ opt, isCorrect: i === q.ans }));
    for (let i = indexed.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indexed[i], indexed[j]] = [indexed[j], indexed[i]];
    }
    shuffledOpts = indexed.map(o => o.opt);
    correctDisp  = indexed.findIndex(o => o.isCorrect);

    const letters = ['A', 'B', 'C', 'D'];
    const grid    = document.getElementById('opts');
    grid.innerHTML = '';
    shuffledOpts.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'opt';
        btn.innerHTML = `<span class="opt-letter">${letters[i]}</span><span class="opt-text">${opt}</span>`;
        btn.dataset.idx = i;
        btn.addEventListener('click', () => selectAnswer(i));
        grid.appendChild(btn);
    });

    const fb = document.getElementById('feedback');
    fb.className   = 'feedback';
    fb.textContent = '';

    const btnNext = document.getElementById('btnNext');
    btnNext.textContent = qIndex < QUESTIONS_PER_ROUND - 1 ? 'Next Question →' : 'See My Results →';
    btnNext.classList.remove('show');
}

/* ================================================================
   ANSWER SELECTION
================================================================ */
function selectAnswer(chosen) {
    const correct = chosen === correctDisp;
    if (correct) score++;
    answerLog.push(correct);

    document.getElementById('scoreNum').textContent = score;

    document.querySelectorAll('.opt').forEach((btn, i) => {
        btn.classList.add('locked');
        btn.style.pointerEvents = 'none';
        if (i === correctDisp) {
            btn.classList.add('is-correct');
        } else if (i === chosen && !correct) {
            btn.classList.add('is-wrong');
        } else {
            btn.classList.add('is-dim');
        }
    });

    const fb = document.getElementById('feedback');
    if (correct) {
        fb.textContent = '✓  Correct! Well done.';
        fb.className   = 'feedback correct show';
    } else {
        fb.textContent = `✗  Not quite — the answer was: ${shuffledOpts[correctDisp]}`;
        fb.className   = 'feedback wrong show';
    }

    document.getElementById('btnNext').classList.add('show');
}

/* ================================================================
   ADVANCE
================================================================ */
function advance() {
    qIndex++;
    if (qIndex >= QUESTIONS_PER_ROUND) {
        finishGame();
    } else {
        renderQuestion();
    }
}

/* ================================================================
   FINISH GAME
================================================================ */
function finishGame() {
    saveCatTodayResult(score, answerLog);

    const stats   = getCatStats();
    const todayDs = new Date().toDateString();
    const yestDs  = (() => { const y = new Date(); y.setDate(y.getDate() - 1); return y.toDateString(); })();

    if (stats.lastDate === yestDs) {
        stats.streak += 1;
    } else if (stats.lastDate !== todayDs) {
        stats.streak = 1;
    }
    stats.best     = Math.max(stats.best, score);
    stats.played  += 1;
    stats.lastDate = todayDs;
    saveCatStats(stats);

    document.getElementById('rScore').textContent  = score;
    document.getElementById('rStreak').textContent = stats.streak;
    document.getElementById('rBest').textContent   = `${stats.best}/5`;
    document.getElementById('rPlayed').textContent = stats.played;

    const MSGS = [
        '"Even legends have off days."',
        '"Keep watching — knowledge is coming."',
        '"You know a little something about something."',
        '"Not bad! A true fan in the making."',
        '"You\'re practically an expert."',
        '"A perfect score — you ARE the headline. ★"',
    ];
    document.getElementById('rMsg').textContent    = MSGS[score];
    document.getElementById('rEmojis').textContent = answerLog.map(a => a ? '🟡' : '⬛').join('  ');

    document.getElementById('bottomAd').style.display = 'flex';
    showScreen('scr-results');
}

/* ================================================================
   ALREADY PLAYED SCREEN
================================================================ */
function showPlayedScreen(result) {
    document.getElementById('playedEmojis').textContent   = result.answers.map(a => a ? '🟡' : '⬛').join('  ');
    document.getElementById('playedScoreNum').textContent = `${result.score}/5`;
    showScreen('scr-played');
}

/* ================================================================
   SHARE
================================================================ */
function share(source) {
    const result  = getCatTodayResult() || { score, answers: answerLog };
    const d       = new Date();
    const dateStr = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const emojis  = result.answers.map(a => a ? '🟡' : '⬛').join('');
    const text    = `SPOTLIGHT ${catInfo.icon} ${catInfo.label} · ${dateStr}\n${result.score}/5\n${emojis}\n\nDaily Pop Culture Trivia\nwww.spotlightquiz.com/category-quiz/?cat=${currentCat}`;

    const showCopied = () => {
        const msgId = source === 'results' ? 'copiedResults' : 'copiedPlayed';
        const el    = document.getElementById(msgId);
        el.textContent = '✓  Copied to clipboard!';
        el.classList.add('show');
        setTimeout(() => el.classList.remove('show'), 2800);
    };

    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(showCopied).catch(() => alert(text));
    } else {
        try {
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
            document.body.appendChild(ta);
            ta.focus();
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            showCopied();
        } catch {
            alert(text);
        }
    }
}

/* ================================================================
   COUNTDOWN TO MIDNIGHT
================================================================ */
function tickCountdown() {
    const now      = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    const diff = midnight - now;
    const h    = Math.floor(diff / 3600000);
    const m    = Math.floor((diff % 3600000) / 60000);
    const s    = Math.floor((diff % 60000) / 1000);
    const str  = `${h}h ${m}m ${s}s`;
    ['cdResults', 'cdPlayed'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = str;
    });
}

/* ================================================================
   START
================================================================ */
init();
