import { describe, expect, it } from 'vitest';
import { cn } from './cn';

describe('cn', () => {
  it('joins truthy class names with a space', () => {
    expect(cn('a', false, 'b', null, undefined, 'c')).toBe('a b c');
  });

  it('returns an empty string when no classes are truthy', () => {
    expect(cn(false, null, undefined)).toBe('');
  });
});
