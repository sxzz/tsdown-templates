import { expect, test } from 'vitest'
import { add } from '../src/add'
import { subtract } from '../src/subtract'

test('add', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtract', () => {
  expect(subtract(3, 2)).toBe(1);
});
