import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const css = readFileSync(resolve(root, 'src/styles/custom.css'), 'utf8');
assert.match(css, /:root\s*\{[\s\S]*color-scheme:\s*dark/);
assert.match(css, /:root\[data-theme='light'\]\s*\{[\s\S]*color-scheme:\s*light/);

const rgb = (hex) => hex.match(/[a-f\d]{2}/gi).map((value) => Number.parseInt(value, 16) / 255);
const luminance = (hex) => rgb(hex).map((value) => value <= 0.04045
	? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4)
	.reduce((sum, value, index) => sum + value * [0.2126, 0.7152, 0.0722][index], 0);
const contrast = (a, b) => {
	const [light, dark] = [luminance(a), luminance(b)].sort((x, y) => y - x);
	return (light + 0.05) / (dark + 0.05);
};
const pairs = {
	'dark body text': ['#bdc2c7', '#0c1117'],
	'dark accent text': ['#62d882', '#0c1117'],
	'light body text': ['#46525d', '#ffffff'],
	'light accent text': ['#176f36', '#ffffff'],
	'dark phase A': ['#65c7ff', '#080d12'],
	'dark phase B': ['#f1b75b', '#080d12'],
	'light phase A': ['#006b9e', '#f7f9fa'],
	'light phase B': ['#8a4f00', '#f7f9fa'],
};
for (const [name, [foreground, background]] of Object.entries(pairs)) {
	assert.ok(contrast(foreground, background) >= 4.5, `${name} contrast is ${contrast(foreground, background).toFixed(2)}:1`);
}
console.log(`Theme tests passed: explicit light/dark color schemes and ${Object.keys(pairs).length} WCAG AA text/plot contrast pairs.`);
