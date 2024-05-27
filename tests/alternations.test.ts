import { describe, expect, it } from 'bun:test'
import { alternations } from '../src/utils/alternations'

const alts = (str: string) => alternations(str).sort()

describe('alternations()', () => {
  it('splits values with OR', () => {
    expect(alts('a(b|c|d)e')).toEqual(['abe', 'ace', 'ade'])
  })

  it('allows empty OR', () => {
    expect(alts('aa(|bb)')).toEqual(['aa', 'aabb'])
    expect(alts('aa(bb|)')).toEqual(['aa', 'aabb'])
  })

  it('removes values with quantifiers', () => {
    expect(alts('ab?c?d')).toEqual(['abcd', 'abd', 'acd', 'ad'])
  })

  it('removes values with quantifier inside groups', () => {
    expect(alts('a(b?c|d)e')).toEqual(['abce', 'ace', 'ade'])
  })
})

describe('limitations', () => {
  it('cannot split values with nested OR', () => {
    const res = ['abcf', 'abdf', 'aef']
    expect(alts('a(b(c|d)|e)f')).not.toEqual(res)
  })

  it('only splits OR in groups', () => {
    expect(alts('a|b')).not.toEqual(['a', 'b'])
  })

  it('cannot remove groups', () => {
    expect(alts('a(bc)?')).not.toEqual(['a', 'abc'])
  })
})
