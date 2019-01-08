describe('this._statement functinos', () => {
  beforeEach(() => {
    this._statement = new Statement();
    this._formatter = new Formatter();
  });

  describe('#receiveDeposit', () => {
    it('adds the checked and formatted deposit transaction to the this._statement', () => {
      expect(this._statement._statementArr.length).toEqual(1);
      this._statement.receiveDeposit(50, 100);
      this._statement.receiveDeposit(50, 150);
      expect(this._statement._statementArr.length).toEqual(3);
    });
  });

  describe('#receiveWithdraw', () => {
    it('adds the checked and formatted withdraw transaction to the this._statement', () => {
      this._statement.receiveWithdraw(50, 50);
      expect(this._statement._statementArr.length).toEqual(2);
    });
  });

  describe('#returnthis._statement', () => {
    it('returns the array of transactions with the header', () => {
      this._statement.receiveDeposit(50, 100);
      this._statement.receiveWithdraw(50, 50);
      let today = this._formatter._formatDate();
      expect(this._statement.returnStatement()).toEqual([
        ['   Date     ||  Credit   ||  Debit   ||  Balance  '],
        [`${today}  ||          ||  50.00  ||  50.00`],
        [`${today}  ||  50.00  ||          ||  100.00`]
      ]);
    });
  });
});
