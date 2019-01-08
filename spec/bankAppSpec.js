describe('this._bankapp functions', () => {
  beforeEach(() => {
    this._bankapp = new BankApp();
    this._formatter = new Formatter();
  });

  describe('#showBalance', () => {
    it('returns the current balance to the user', () => {
      this._bankapp.deposit(100);
      this._bankapp.withdraw(50);
      expect(this._bankapp.showBalance()).toEqual(50);
    });
  });

  describe('#deposit', () => {
    it('deposits amount to balance', () => {
      this._bankapp.deposit(100);
      expect(this._bankapp._balance).toEqual(100);
    });
  });

  describe('#withdraw', () => {
    it('withdraws the amount from balance', () => {
      this._bankapp._balance = 100;
      this._bankapp.withdraw(50);
      expect(this._bankapp._balance).toEqual(50);
    });
  });

  describe('#printStatement', () => {
    it('returns the statement', () => {
      let today = this._formatter._formatDate();
      this._bankapp.deposit(100);
      this._bankapp.withdraw(50);
      expect(this._bankapp.returnStatementArray()).toEqual([
        ['   Date     ||  Credit   ||  Debit   ||  Balance  '],
        [`${today}  ||          ||  50.00  ||  50.00`],
        [`${today}  ||  100.00  ||          ||  100.00`]
      ]);
    });
  });
});
