/* ================================================================
   QUESTION BANK  (50 questions, 5 categories)
   Requires js/shared.js (seededRNG, dateSeed) to be loaded first.
================================================================ */
const BANK = [
    /* ── MOVIES ── */
    { cat:'movies', icon:'🎬', label:'Movies',
      q:'Which 2023 blockbuster starred Margot Robbie as a plastic fashion doll?',
      opts:['The Doll House','Mean Girls','Legally Blonde 3','Barbie'], ans:3 },

    { cat:'movies', icon:'🎬', label:'Movies',
      q:'Who directed "Oppenheimer" (2023)?',
      opts:['Denis Villeneuve','Steven Spielberg','Quentin Tarantino','Christopher Nolan'], ans:3 },

    { cat:'movies', icon:'🎬', label:'Movies',
      q:'Which film carries the tagline "In space, no one can hear you scream"?',
      opts:['Gravity','Interstellar','The Martian','Alien'], ans:3 },

    { cat:'movies', icon:'🎬', label:'Movies',
      q:'Who voices Woody in the Toy Story franchise?',
      opts:['Jim Carrey','Will Smith','Tom Cruise','Tom Hanks'], ans:3 },

    { cat:'movies', icon:'🎬', label:'Movies',
      q:'Which film won the Academy Award for Best Picture at the 2020 Oscars?',
      opts:['1917','Joker','Once Upon a Time in Hollywood','Parasite'], ans:3 },

    { cat:'movies', icon:'🎬', label:'Movies',
      q:'What color pill does Neo choose to learn the truth in "The Matrix"?',
      opts:['Blue','Yellow','Green','Red'], ans:3 },

    { cat:'movies', icon:'🎬', label:'Movies',
      q:'Which Disney film features the power ballad "Let It Go"?',
      opts:['Brave','Tangled','Moana','Frozen'], ans:3 },

    { cat:'movies', icon:'🎬', label:'Movies',
      q:'Who plays Tony Stark / Iron Man in the Marvel Cinematic Universe?',
      opts:['Chris Evans','Chris Hemsworth','Benedict Cumberbatch','Robert Downey Jr.'], ans:3 },

    { cat:'movies', icon:'🎬', label:'Movies',
      q:'In "Catch Me If You Can," Leonardo DiCaprio plays real-life conman Frank Abagnale Jr. Who directed it?',
      opts:['Martin Scorsese','James Cameron','David Fincher','Steven Spielberg'], ans:3 },

    { cat:'movies', icon:'🎬', label:'Movies',
      q:'Which fictional school do Harry, Ron and Hermione attend?',
      opts:['Beauxbatons','Durmstrang','Ilvermorny','Hogwarts'], ans:3 },

    /* ── TV SHOWS ── */
    { cat:'tv', icon:'📺', label:'TV Shows',
      q:'Which Netflix series is set in the fictional Indiana town of Hawkins?',
      opts:['Dark','Mindhunter','The OA','Stranger Things'], ans:3 },

    { cat:'tv', icon:'📺', label:'TV Shows',
      q:'Who plays high-school-teacher-turned-drug-lord Walter White in "Breaking Bad"?',
      opts:['Aaron Paul','Bob Odenkirk','Dean Norris','Bryan Cranston'], ans:3 },

    { cat:'tv', icon:'📺', label:'TV Shows',
      q:'What is the name of the coffee shop where the Friends gang hangs out?',
      opts:['The Daily Grind','Café Du Monde','The Peach Pit','Central Perk'], ans:3 },

    { cat:'tv', icon:'📺', label:'TV Shows',
      q:'Which HBO drama follows the Roy family\'s battle over a global media empire?',
      opts:['Industry','Suits','Billions','Succession'], ans:3 },

    { cat:'tv', icon:'📺', label:'TV Shows',
      q:'What is the very first game contestants are forced to play in "Squid Game"?',
      opts:['Honeycomb','Marbles','Tug of War','Red Light Green Light'], ans:3 },

    { cat:'tv', icon:'📺', label:'TV Shows',
      q:'Which actress portrays Daenerys Targaryen, "Mother of Dragons," in Game of Thrones?',
      opts:['Sophie Turner','Maisie Williams','Natalie Dormer','Emilia Clarke'], ans:3 },

    { cat:'tv', icon:'📺', label:'TV Shows',
      q:'What fictional paper company is the setting of the US version of "The Office"?',
      opts:['Scott Paper Co.','Halpert & Sons','Wernham Hogg','Dunder Mifflin'], ans:3 },

    { cat:'tv', icon:'📺', label:'TV Shows',
      q:'Who plays the titular Wednesday Addams in Netflix\'s "Wednesday"?',
      opts:['Sadie Sink','Joey King','Millie Bobby Brown','Jenna Ortega'], ans:3 },

    { cat:'tv', icon:'📺', label:'TV Shows',
      q:'The famous motto "Winter is Coming" belongs to which noble house in Game of Thrones?',
      opts:['House Lannister','House Baratheon','House Targaryen','House Stark'], ans:3 },

    { cat:'tv', icon:'📺', label:'TV Shows',
      q:'Tony Stark\'s AI butler in the Iron Man films goes by what name?',
      opts:['HAL','ARIA','WALL-E','JARVIS'], ans:3 },

    /* ── MUSIC ── */
    { cat:'music', icon:'🎵', label:'Music',
      q:'Which superstar released the acclaimed dance album "Renaissance" in 2022?',
      opts:['Rihanna','Nicki Minaj','Lizzo','Beyoncé'], ans:3 },

    { cat:'music', icon:'🎵', label:'Music',
      q:'What is The Weeknd\'s real birth name?',
      opts:['Michael Thompson','Kevin Hart','Daniel Johnson','Abel Tesfaye'], ans:3 },

    { cat:'music', icon:'🎵', label:'Music',
      q:'Which legendary British rock band recorded "Bohemian Rhapsody" and "We Will Rock You"?',
      opts:['Led Zeppelin','The Rolling Stones','The Beatles','Queen'], ans:3 },

    { cat:'music', icon:'🎵', label:'Music',
      q:'In what year did Michael Jackson release his iconic "Thriller" album?',
      opts:['1979','1985','1988','1982'], ans:3 },

    { cat:'music', icon:'🎵', label:'Music',
      q:'The rapper Drake\'s legal birth name is:',
      opts:['Kendrick Duckworth','Shéyaa Joseph','Rakim Mayers','Aubrey Graham'], ans:3 },

    { cat:'music', icon:'🎵', label:'Music',
      q:'Billie Eilish won the Oscar for Best Original Song for which James Bond film?',
      opts:['Skyfall','Spectre','Casino Royale','No Time to Die'], ans:3 },

    { cat:'music', icon:'🎵', label:'Music',
      q:'Taylor Swift\'s Eras Tour became the first concert tour ever to gross more than:',
      opts:['$500 million','$2 billion','$750 million','$1 billion'], ans:3 },

    { cat:'music', icon:'🎵', label:'Music',
      q:'As of 2024, who holds the record for the most Grammy Awards won in history?',
      opts:['Taylor Swift','Jay-Z','Georg Solti','Beyoncé'], ans:3 },

    { cat:'music', icon:'🎵', label:'Music',
      q:'Which iconic artist is universally known as the "Queen of Pop"?',
      opts:['Mariah Carey','Beyoncé','Whitney Houston','Madonna'], ans:3 },

    { cat:'music', icon:'🎵', label:'Music',
      q:'The K-pop group BTS is from which country?',
      opts:['Japan','China','Thailand','South Korea'], ans:3 },

    /* ── CELEBRITY ── */
    { cat:'celeb', icon:'⭐', label:'Celebrity',
      q:'Which celebrity couple is nicknamed "Bennifer"?',
      opts:['Ben Stiller & Jennifer Aniston','Ben Kingsley & Jennifer Garner','Benedict Cumberbatch & Jennifer Lawrence','Ben Affleck & Jennifer Lopez'], ans:3 },

    { cat:'celeb', icon:'⭐', label:'Celebrity',
      q:'Who played The Joker in Christopher Nolan\'s "The Dark Knight" (2008)?',
      opts:['Jared Leto','Jack Nicholson','Joaquin Phoenix','Heath Ledger'], ans:3 },

    { cat:'celeb', icon:'⭐', label:'Celebrity',
      q:'Kim Kardashian was previously married to which Grammy-winning rapper?',
      opts:['Jay-Z','Travis Scott','Snoop Dogg','Kanye West'], ans:3 },

    { cat:'celeb', icon:'⭐', label:'Celebrity',
      q:'Zendaya won back-to-back Emmy Awards for Outstanding Lead Actress in which HBO series?',
      opts:['Insecure','Lovecraft Country','I May Destroy You','Euphoria'], ans:3 },

    { cat:'celeb', icon:'⭐', label:'Celebrity',
      q:'Which Chris plays Thor in the Marvel Cinematic Universe?',
      opts:['Chris Evans','Chris Pratt','Chris Pine','Chris Hemsworth'], ans:3 },

    { cat:'celeb', icon:'⭐', label:'Celebrity',
      q:'Lady Gaga\'s famous fan nickname for herself is:',
      opts:['Little Monsters (she calls herself Mother Monster)','Queen of Monsters','The Haus Head','Little Gaga'], ans:3 },

    { cat:'celeb', icon:'⭐', label:'Celebrity',
      q:'As of 2024, who is the most-followed individual on Instagram?',
      opts:['Taylor Swift','Kylie Jenner','Selena Gomez','Cristiano Ronaldo'], ans:3 },

    { cat:'celeb', icon:'⭐', label:'Celebrity',
      q:'Which actress plays Natasha Romanoff / Black Widow in the MCU?',
      opts:['Gal Gadot','Brie Larson','Zoe Saldana','Scarlett Johansson'], ans:3 },

    { cat:'celeb', icon:'⭐', label:'Celebrity',
      q:'Which fiery celebrity chef hosts the cooking competition show "Hell\'s Kitchen"?',
      opts:['Anthony Bourdain','Bobby Flay','Guy Fieri','Gordon Ramsay'], ans:3 },

    { cat:'celeb', icon:'⭐', label:'Celebrity',
      q:'Emma Stone won her first Academy Award for Best Actress for her role in:',
      opts:['Easy A','Birdman','The Favourite','La La Land'], ans:3 },

    /* ── POP CULTURE ── */
    { cat:'pop', icon:'🌟', label:'Pop Culture',
      q:'Which social media platform is best known for its personalized "For You Page" (FYP)?',
      opts:['Instagram','Snapchat','Twitter / X','TikTok'], ans:3 },

    { cat:'pop', icon:'🌟', label:'Pop Culture',
      q:'Who was hosting the Oscars when Will Smith walked onstage and slapped him?',
      opts:['Jimmy Fallon','Kevin Hart','Ricky Gervais','Chris Rock'], ans:3 },

    { cat:'pop', icon:'🌟', label:'Pop Culture',
      q:'What does the "E" in EGOT stand for?',
      opts:['Excellence','Elite','Entertainment','Emmy'], ans:3 },

    { cat:'pop', icon:'🌟', label:'Pop Culture',
      q:'Which long-running reality competition show launched the careers of Kelly Clarkson and Carrie Underwood?',
      opts:['Dancing with the Stars','Big Brother','The Voice','American Idol'], ans:3 },

    { cat:'pop', icon:'🌟', label:'Pop Culture',
      q:'The 2016 smash hit "Closer" was performed by which electronic duo?',
      opts:['Twenty One Pilots','Imagine Dragons','Glass Animals','The Chainsmokers'], ans:3 },

    { cat:'pop', icon:'🌟', label:'Pop Culture',
      q:'Which streaming service produces the royal drama "The Crown"?',
      opts:['HBO Max','Hulu','Amazon Prime Video','Netflix'], ans:3 },

    { cat:'pop', icon:'🌟', label:'Pop Culture',
      q:'The viral "Ice Bucket Challenge" raised millions in awareness for which disease?',
      opts:["Parkinson's","Multiple Sclerosis","Alzheimer's","ALS"], ans:3 },

    { cat:'pop', icon:'🌟', label:'Pop Culture',
      q:'Which fictional superhero team includes Captain America, Iron Man, and Thor?',
      opts:['X-Men','Guardians of the Galaxy','Justice League','The Avengers'], ans:3 },

    { cat:'pop', icon:'🌟', label:'Pop Culture',
      q:'Which battle-royale video game became a massive global phenomenon starting in 2017?',
      opts:['Apex Legends','PUBG','Call of Duty: Warzone','Fortnite'], ans:3 },

    { cat:'pop', icon:'🌟', label:'Pop Culture',
      q:'The "Barbenheimer" cultural moment in summer 2023 referred to the same-day release of Barbie and which film?',
      opts:['Mission: Impossible','Indiana Jones','Asteroid City','Oppenheimer'], ans:3 },
];

/* ================================================================
   DAILY QUESTION SELECTION
   Picks one question per category using the date seed from shared.js.
================================================================ */
function getDailyQuestions() {
    const rng  = seededRNG(dateSeed());
    const pool = [...BANK];
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    const cats = ['movies', 'tv', 'music', 'celeb', 'pop'];
    return cats.map(c => pool.find(q => q.cat === c));
}

/* ================================================================
   PERSISTENCE (localStorage)
================================================================ */
function todayKey() {
    const d = new Date();
    return `spotlight_${d.getFullYear()}_${d.getMonth() + 1}_${d.getDate()}`;
}

function getStats() {
    try {
        const raw = localStorage.getItem('spotlight_stats');
        return raw ? JSON.parse(raw) : { streak:0, best:0, played:0, lastDate:'' };
    } catch {
        return { streak:0, best:0, played:0, lastDate:'' };
    }
}

function saveStats(s) { localStorage.setItem('spotlight_stats', JSON.stringify(s)); }

function saveTodayResult(score, answers) {
    localStorage.setItem(todayKey(), JSON.stringify({ score, answers }));
}

function getTodayResult() {
    try {
        const raw = localStorage.getItem(todayKey());
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
let answerLog    = [];       // array of booleans
let shuffledOpts = [];       // per-question shuffled display order
let correctDisp  = 0;        // index in shuffledOpts that is correct

/* ================================================================
   INIT
================================================================ */
function init() {
    const d = new Date();
    document.getElementById('headerDate').textContent =
        d.toLocaleDateString('en-US', { weekday:'long', year:'numeric', month:'long', day:'numeric' });

    const stats = getStats();
    document.getElementById('splashStreak').textContent = stats.streak;
    document.getElementById('splashBest').textContent   = stats.best ? `${stats.best}/5` : '—';

    const result = getTodayResult();
    if (result) {
        showPlayedScreen(result);
    }

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
    questions = getDailyQuestions();
    qIndex    = 0;
    score     = 0;
    answerLog = [];
    showScreen('scr-game');
    renderQuestion();
}

/* ================================================================
   RENDER QUESTION
================================================================ */
const CAT_COLORS = { movies:'#F0B429', tv:'#A78BFA', music:'#34D399', celeb:'#F472B6', pop:'#60A5FA' };

function renderQuestion() {
    const q = questions[qIndex];

    document.getElementById('qNum').textContent     = qIndex + 1;
    document.getElementById('scoreNum').textContent = score;
    document.getElementById('pbar').style.width     = `${(qIndex / 5) * 100}%`;

    const catEl = document.getElementById('qCat');
    catEl.style.color = CAT_COLORS[q.cat] || '#F0B429';
    catEl.textContent = `${q.icon} ${q.label}`;

    document.getElementById('qText').textContent = q.q;

    // Shuffle options (display only — does not affect the seeded daily pick)
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
        btn.addEventListener('click', () => selectAnswer(i, btn));
        grid.appendChild(btn);
    });

    const fb = document.getElementById('feedback');
    fb.className   = 'feedback';
    fb.textContent = '';

    const btnNext = document.getElementById('btnNext');
    btnNext.textContent = qIndex < 4 ? 'Next Question →' : 'See My Results →';
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
   ADVANCE TO NEXT QUESTION OR RESULTS
================================================================ */
function advance() {
    qIndex++;
    if (qIndex >= 5) {
        finishGame();
    } else {
        renderQuestion();
    }
}

/* ================================================================
   FINISH GAME
================================================================ */
function finishGame() {
    saveTodayResult(score, answerLog);

    const stats   = getStats();
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
    saveStats(stats);

    document.getElementById('rScore').textContent  = score;
    document.getElementById('rStreak').textContent = stats.streak;
    document.getElementById('rBest').textContent   = `${stats.best}/5`;
    document.getElementById('rPlayed').textContent = stats.played;

    const MSGS = [
        '"Even legends have off days."',
        '"Keep watching — knowledge is coming."',
        '"You know a little something about something."',
        '"Not bad! A true pop culture fan in the making."',
        '"You\'re practically a celebrity yourself."',
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
    const result  = getTodayResult() || { score, answers: answerLog };
    const d       = new Date();
    const dateStr = d.toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' });
    const emojis  = result.answers.map(a => a ? '🟡' : '⬛').join('');
    const text    = `SPOTLIGHT ✦ ${dateStr}\n${result.score}/5\n${emojis}\n\nDaily Pop Culture Trivia\nspotlight-trivia.com/trivia/`;

    navigator.clipboard.writeText(text).then(() => {
        const msgId = source === 'results' ? 'copiedResults' : 'copiedPlayed';
        const el    = document.getElementById(msgId);
        el.textContent = '✓  Copied to clipboard!';
        el.classList.add('show');
        setTimeout(() => el.classList.remove('show'), 2800);
    }).catch(() => {
        alert(text);
    });
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
