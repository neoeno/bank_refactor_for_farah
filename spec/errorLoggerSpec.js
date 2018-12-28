/* global describe, beforeEach, it, expect, errorlogger:true, ErrorLogger */

describe('ErrorLogger functions', () => {
  beforeEach(() => {
    errorlogger = new ErrorLogger();
  });

  describe(('#lessThanOne'), () => {
    it('returns Amount must an integer greater than 1', () => {
      expect(errorlogger.lessThanOne()).toEqual('Amount must an integer greater than 1');
    });
  });

  describe(('#notANumber'), () => {
    it('returns Amount must be a number', () => {
      expect(errorlogger.notANumber()).toEqual('Amount must be a number');
    });
  });

  describe(('#notAnIntegerr'), () => {
    it('returns Amount must be an integer', () => {
      expect(errorlogger.notAnInteger()).toEqual('Amount must be an integer');
    });
  });

  describe(('#insufficientFunds'), () => {
    it('returns Insuficcient funds', () => {
      expect(errorlogger.insufficientFunds()).toEqual('Insuficcient funds');
    });
  });
});
