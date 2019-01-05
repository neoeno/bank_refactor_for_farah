describe('ErrorLogger functions', () => {
  beforeEach(() => {
    errorlogger = new ErrorLogger();
  });

  describe(('#returnLessThanOne'), () => {
    it('returns Amount must an integer greater than 1', () => {
      expect(errorlogger.returnLessThanOne()).toEqual('Amount must an integer greater than 1');
    });
  });

  describe(('#returnNotANumber'), () => {
    it('returns Amount must be a number', () => {
      expect(errorlogger.returnNotANumber()).toEqual('Amount must be a number');
    });
  });

  describe(('#returnNotAnInteger'), () => {
    it('returns Amount must be an integer', () => {
      expect(errorlogger.returnNotAnInteger()).toEqual('Amount must be an integer');
    });
  });

  describe(('#returnInsufficientFunds'), () => {
    it('returns Insuficcient funds', () => {
      expect(errorlogger.returnInsufficientFunds()).toEqual('Insuficcient funds');
    });
  });
});
