describe('this._errorlogger functions', () => {
  beforeEach(() => {
    this._errorlogger = new ErrorLogger();
  });

  describe(('#returnLessThanOne'), () => {
    it('returns Amount must an integer greater than 1', () => {
      expect(this._errorlogger.returnLessThanOne()).toEqual('Amount must an integer greater than 1');
    });
  });

  describe(('#returnNotANumber'), () => {
    it('returns Amount must be a number', () => {
      expect(this._errorlogger.returnNotANumber()).toEqual('Amount must be a number');
    });
  });

  describe(('#returnNotAnInteger'), () => {
    it('returns Amount must be an integer', () => {
      expect(this._errorlogger.returnNotAnInteger()).toEqual('Amount must be an integer');
    });
  });

  describe(('#returnInsufficientFunds'), () => {
    it('returns Insuficcient funds', () => {
      expect(this._errorlogger.returnInsufficientFunds()).toEqual('Insuficcient funds');
    });
  });
});
