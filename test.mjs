import { test } from 'node:test';
import assert from 'node:assert/strict';
import { add } from './math.mjs';
test('sum preserves expected result', () => assert.equal(add(2, 3), 5));
