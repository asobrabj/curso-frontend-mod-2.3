import { divisao, multiplicacao, soma, subtracao } from './actions'

describe('calculator', () => {
  it('soma', () => {
    const result = soma(2, 2)

    expect(result).toBe(4)
    expect(result).not.toBe(5)
  })
  it('subtração', () => {
    const result = subtracao(2, 2)

    expect(result).toBe(0)
    expect(result).not.toBe(5)
  })
  it('multiplicação', () => {
    const result = multiplicacao(2, 2)

    expect(result).toBe(4)
    expect(result).not.toBe(5)
  })
  it('divisão', () => {
    const result = divisao(2, 2)

    expect(result).toBe(1)
    expect(result).not.toBe(5)
  })
})
