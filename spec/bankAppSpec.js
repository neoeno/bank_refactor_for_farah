describe('bankapp functions', () => {
  let bankapp;
  let formatter;
  beforeEach(() => {
    bankapp = new BankApp();
    formatter = new Formatter();
  });

  describe('#showBalance', () => {
    it('returns the current balance to the user', () => {
      bankapp.deposit(100);
      bankapp.withdraw(50);
      expect(bankapp.showBalance()).toEqual(50);
    });
  });

  describe('#deposit', () => {
    it('deposits amount to balance', () => {
      bankapp.deposit(100);
      expect(bankapp._balance).toEqual(100);
    });
  });

  describe('#withdraw', () => {
    it('withdraws the amount from balance', () => {
      bankapp._balance = 100;
      bankapp.withdraw(50);
      expect(bankapp._balance).toEqual(50);
    });
  });

  describe('#printStatement', () => {
    it('returns the statement', () => {
      let today = formatter._formatDate();
      bankapp.deposit(100);
      bankapp.withdraw(50);
      expect(bankapp.returnStatementArray()).toEqual([
        ['   Date     ||  Credit   ||  Debit   ||  Balance  '],
        [`${today}  ||          ||  50.00  ||  50.00`],
        [`${today}  ||  100.00  ||          ||  100.00`]
      ]);
    });
  });
});
