import test from 'node:test';
import assert from 'node:assert';

import { sum } from '../src/index.js';

test('adds 1 + 2 to equal 3', () => {
  const result: number = sum(1, 2);
  assert.strictEqual(result, 3);
});
