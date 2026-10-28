import test from 'node:test';
import assert from 'node:assert/strict';
import { isRestrictedShortcut } from '../lib/contentDeterrents.js';

test('blocks common inspection, source and save shortcuts', () => {
  for (const event of [
    { key: 'F12' }, { key: 'I', ctrlKey: true, shiftKey: true },
    { key: 'j', ctrlKey: true, shiftKey: true }, { key: 'C', ctrlKey: true, shiftKey: true },
    { key: 'i', metaKey: true, altKey: true }, { key: 'u', metaKey: true, altKey: true },
    { key: 'u', ctrlKey: true }, { key: 's', metaKey: true },
    { code: 'F12' }, { key: 'Unidentified', code: 'F12' },
    { key: 'Unidentified', code: 'KeyI', ctrlKey: true, shiftKey: true },
    { code: 'KeyJ', metaKey: true, altKey: true },
  ]) assert.equal(isRestrictedShortcut(event), true);
});

test('preserves normal editing, navigation and video keyboard activation', () => {
  for (const event of [
    { key: 'c', ctrlKey: true }, { key: 'v', ctrlKey: true }, { key: 'a', metaKey: true },
    { key: 'z', ctrlKey: true }, { key: 'Tab' }, { key: 'Escape' }, { key: ' ' },
    { key: 'Enter' }, { key: 'i' }, { key: 'ArrowDown' },
  ]) assert.equal(isRestrictedShortcut(event), false);
});
