const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js') + '');
const RELATIVE_TOLERANCE = 1e-8;
const expectedValues = {
    0: 1.0,
    1: 2.0,
    2: 2.5,
    5: 2.7166666666666663,
    10: 2.7182818011463845,
    20: 2.718281828459045 
};

try {
    Object.entries(expectedValues).forEach(([n, expected]) => {
        const result = e(Number(n));
        console.log(`e(${n}): ${result}, Expected: ${expected}`);
        assert(
            Math.abs(result - expected) / expected < RELATIVE_TOLERANCE,
            `failed for n=${n}`
        );
    });

    console.log("e(50):", e(50)); 

    console.log("passed");
} catch (error) {
    console.error("Test failed:", error.message);
}
