import { describe, expect, it } from 'bun:test'
import { alternations } from '../src/utils/alternations'

describe('alternations()', () => {
  it('splits values with OR', () => {
    expect(alternations('a(b|c|d)e').sort()).toEqual(['abe', 'ace', 'ade'])
  })

  it('splits values with nested OR', () => {
    expect(alternations('a(b(c|d)|e)f').sort()).toEqual(['abcf', 'abdf', 'aef'])
  })

  it('allows empty OR', () => {
    expect(alternations('aa(|bb)').sort()).toEqual(['aa', 'aabb'])
    expect(alternations('aa(bb|)').sort()).toEqual(['aa', 'aabb'])
  })

  it('removes values with quantifiers', () => {
    expect(alternations('ab?c?d').sort()).toEqual(['abcd', 'abd', 'acd', 'ad'])
  })

  it('removes values with quantifier inside groups', () => {
    expect(alternations('a(b?c|d)e').sort()).toEqual(['abce', 'ace', 'ade'])
  })
})
