describe('Bank Application', () => {
  beforeEach(() => {
    this._bankapp = new BankApp();
    this._formatter = new Formatter();
  });

  describe('Correct inputs deposit/withdraw', () => {
    it('has the correct balance amount', () => {
      this._bankapp.deposit(100);
      this._bankapp.deposit(100);
      this._bankapp.withdraw('50');
      this._bankapp.withdraw(20);
      expect(this._bankapp.showBalance()).toEqual(130);
    });
  });

  describe('Incorrect inputs deposit/withdraw', () => {
    it('has the correct balance amount', () => {
      this._bankapp.deposit(-100);
      this._bankapp.deposit(100);
      this._bankapp.deposit('100');
      this._bankapp.deposit(10.56);
      this._bankapp.withdraw(500);
      this._bankapp.withdraw(20);
      expect(this._bankapp.showBalance()).toEqual(180);
    });
  });

  describe('Transactions with print statement', () => {
    it('prints out all the transactions', () => {
      this._bankapp.deposit(100);
      this._bankapp.deposit(100);
      this._bankapp.withdraw(50);
      this._bankapp.withdraw(20);
      expect(this._bankapp.showBalance()).toEqual(130);
      let today = this._formatter._formatDate();
      expect(this._bankapp.returnStatementArray()).toEqual([
        ['   Date     ||  Credit   ||  Debit   ||  Balance  '],
        [`${today}  ||          ||  20.00  ||  130.00`],
        [`${today}  ||          ||  50.00  ||  150.00`],
        [`${today}  ||  100.00  ||          ||  200.00`],
        [`${today}  ||  100.00  ||          ||  100.00`]
      ]);
    });
  });

  describe('Some incorrect transactions with print statement', () => {
    it('prints the correct number of transactions', () => {
      this._bankapp.deposit(-100);
      this._bankapp.deposit(100);
      this._bankapp.deposit(10.56);
      this._bankapp.withdraw(500);
      this._bankapp.withdraw(20);
      expect(this._bankapp.showBalance()).toEqual(80);
      let today = this._formatter._formatDate();
      expect(this._bankapp.returnStatementArray()).toEqual([
        ['   Date     ||  Credit   ||  Debit   ||  Balance  '],
        [`${today}  ||          ||  20.00  ||  80.00`],
        [`${today}  ||  100.00  ||          ||  100.00`],
        [`${today}  ||  100.00  ||          ||  100.00`]
      ]);
    });
  });
});
