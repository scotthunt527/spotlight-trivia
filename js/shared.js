/* ================================================================
   SHARED UTILITIES — Seeded RNG & Date helpers
   Reusable by any SPOTLIGHT game that needs date-seeded randomisation.
================================================================ */

function seededRNG(seed) {
    let s = seed >>> 0;
    return () => {
        s = Math.imul(1664525, s) + 1013904223 | 0;
        return (s >>> 0) / 0x100000000;
    };
}

function dateSeed() {
    const d = new Date();
    return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
}
