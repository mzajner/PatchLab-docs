import assert from 'node:assert/strict';

const near = (actual, expected, tolerance = 1e-12) =>
	assert.ok(Math.abs(actual - expected) <= tolerance, `${actual} is not within ${tolerance} of ${expected}`);
const ratioToDb = (ratio) => ratio === 0 ? -Infinity : 20 * Math.log10(ratio);
const dbToRatio = (db) => 10 ** (db / 20);
const equalSineSumPeak = (phaseDegrees) => 2 * Math.abs(Math.cos(phaseDegrees * Math.PI / 360));

near(ratioToDb(2), 6.020599913279624);
near(ratioToDb(0.5), -6.020599913279624);
near(ratioToDb(0.1), -20);
assert.equal(ratioToDb(0), -Infinity);
near(dbToRatio(6.020599913279624), 2);
near(dbToRatio(-6.020599913279624), 0.5);

near(1 / 1000, 0.001);
near(48000 / 1000, 48);
near(-2 * Math.PI * 1000 * 0.001, -2 * Math.PI);
near(equalSineSumPeak(0), 2);
near(equalSineSumPeak(90), Math.sqrt(2));
near(equalSineSumPeak(180), 0, 1e-15);

const encodeMs = (left, right) => [(left + right) / Math.sqrt(2), (left - right) / Math.sqrt(2)];
const decodeMs = (mid, side) => [(mid + side) / Math.sqrt(2), (mid - side) / Math.sqrt(2)];
for (const [left, right] of [[1, 0], [0.25, -0.75], [-1, 1], [0, 0]]) {
	const [decodedLeft, decodedRight] = decodeMs(...encodeMs(left, right));
	near(decodedLeft, left);
	near(decodedRight, right);
}

near(128 / 48000, 0.0026666666666666666);
near(48000 / 1024, 46.875);
near(Math.abs(30000 - 48000), 18000);

console.log('DSP invariant tests passed: gain/dB, period, delay phase, equal-sine summing, mid/side round trip, real-time deadline, FFT spacing, and alias folding.');
