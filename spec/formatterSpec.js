describe('this._formatter functions', () => {
  beforeEach(() => {
    this._formatter = new Formatter();
  });

  describe('#formatDepositTransactions', () => {
    it('formats the deposit transactions as per the requierments', () => {
      this._formatter.formatDepositTransactions(44, 44);
      let today = this._formatter._formatDate();
      expect(this._formatter._transactionsHolder).toEqual([`${today}  ||  44.00  ||          ||  44.00`]);
    });
  });

  describe('#formatWithdrawTransactions', () => {
    it('formats the withdraw transactions as per the requierments', () => {
      this._formatter.formatWithdrawTransactions(44, 44);
      let today = this._formatter._formatDate();
      expect(this._formatter._transactionsHolder).toEqual([`${today}  ||          ||  44.00  ||  44.00`]);
    });
  });

  describe('#sendFormattedTransaction', () => {
    it('returns the formatted deposit transaction to statement', () => {
      this._formatter.formatDepositTransactions(40, 80);
      expect(this._formatter._transactionsHolder.length).toEqual(1);
      this._formatter.sendFormattedTransaction();
      expect(this._formatter._transactionsHolder.length).toEqual(0);
    });

    it('returns the formatted withdraw transaction to statement', () => {
      this._formatter.formatWithdrawTransactions(40, 80);
      expect(this._formatter._transactionsHolder.length).toEqual(1);
      this._formatter.sendFormattedTransaction();
      expect(this._formatter._transactionsHolder.length).toEqual(0);
    });
  });
});
