import { test } from 'vitest';
import { findMinBoundingRect } from './index';

function randomPoints(n: number, seed: number): [number, number][] {
	let s = seed;
	const rand = () => {
		s = (s * 16807) % 2147483647;
		return (s - 1) / 2147483646;
	};
	return Array.from({ length: n }, () => [rand() * 1000, rand() * 1000]);
}

for (const n of [10, 100, 1000, 10000]) {
	const points = randomPoints(n, n + 1);
	test(`findMinBoundingRect - ${n} points`, async ({ bench }) => {
		await bench(`${n} points`, () => {
			findMinBoundingRect(points);
		}).run();
	});
}
