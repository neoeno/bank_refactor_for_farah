/* global describe, beforeEach, it, expect, errorlogger:true, ErrorLogger */

describe('ErrorLogger functions', () => {
  beforeEach(() => {
    errorlogger = new ErrorLogger()
  })

  describe(('#greaterThanOne'), () => {
    it('returns Amount must an integer greater than 1', () => {
      expect(errorlogger._greaterThanOne()).toEqual('Amount must an integer greater than 1')
    })
  })

  describe(('#mustBeANumber'), () => {
    it('returns Amount must be a number', () => {
      expect(errorlogger._mustBeANumber()).toEqual('Amount must be a number')
    })
  })

  describe(('#mustBeAnInteger'), () => {
    it('returns Amount must be an integer', () => {
      expect(errorlogger._mustBeAnInteger()).toEqual('Amount must be an integer')
    })
  })

  describe(('#insufficientFunds'), () => {
    it('returns Insuficcient funds', () => {
      expect(errorlogger._insufficientFunds()).toEqual('Insuficcient funds')
    })
  })
})
