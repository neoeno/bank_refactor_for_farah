/* global describe, beforeEach, it, expect, errorlogger:true, ErrorLogger */

describe('ErrorLogger functions', () => {
  beforeEach(() => {
    errorlogger = new ErrorLogger();
  });

  describe(('#_lessThanOne'), () => {
    it('returns Amount must an integer greater than 1', () => {
      expect(errorlogger._lessThanOne()).toEqual('Amount must an integer greater than 1');
    });
  });

  describe(('#_notANumber'), () => {
    it('returns Amount must be a number', () => {
      expect(errorlogger._notANumber()).toEqual('Amount must be a number');
    });
  });

  describe(('#_notAnIntegerr'), () => {
    it('returns Amount must be an integer', () => {
      expect(errorlogger._notAnInteger()).toEqual('Amount must be an integer');
    });
  });

  describe(('#_insufficientFunds'), () => {
    it('returns Insuficcient funds', () => {
      expect(errorlogger._insufficientFunds()).toEqual('Insuficcient funds');
    });
  });
});
