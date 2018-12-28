describe('Interface functions', () => {
  beforeEach(() => {
    bankapp = new Bankapp();
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

  describe('#_checkDepositAmount', () => {
    it('changes the balance only if the amount is a positive integer', () => {
      bankapp._checkDepositAmount(200);
      bankapp._checkDepositAmount(100);
      expect(bankapp.showBalance()).toEqual(300);
    });

    it('does not change the balance if amount is less than 1', () => {
      bankapp._checkDepositAmount(100);
      bankapp._checkDepositAmount(-4);
      expect(bankapp.showBalance()).toEqual(100);
    });

    it('does not change the balance if amount is not an integer', () => {
      bankapp._checkDepositAmount(100);
      bankapp._checkDepositAmount(1.4);
      expect(bankapp.showBalance()).toEqual(100);
    });

    it('does not change the balance if amount is not a number', () => {
      bankapp._checkDepositAmount(100);
      bankapp._checkDepositAmount('foo');
      expect(bankapp.showBalance()).toEqual(100);
    });
  });

  describe('#_checkWithdrawAmount,', () => {
    it('does not change balance if amount is greater than balance', () => {
      bankapp._checkDepositAmount(100);
      bankapp._checkWithdrawAmount(500);
      expect(bankapp.showBalance()).toEqual(100);
    });

    it('does not change balance if amount is not in integer', () => {
      bankapp._checkDepositAmount(100);
      bankapp._checkWithdrawAmount(10.4);
      expect(bankapp.showBalance()).toEqual(100);
    });

    it('does not change balance if amount is not a positive integer', () => {
      bankapp._checkDepositAmount(100);
      bankapp._checkWithdrawAmount(10);
      expect(bankapp.showBalance()).toEqual(90);
    });
  });

  describe('#printStatement', () => {
    it('returns the statement', () => {
      let today = formatter._formatDate();
      bankapp.deposit(100);
      bankapp.withdraw(50);
      expect(bankapp.printStatement()).toEqual([
        ['   Date     ||  Credit   ||  Debit   ||  Balance  '],
        [`${today}  ||          ||  50.00  ||  50.00`],
        [`${today}  ||  100.00  ||          ||  100.00`]
      ]);
    });
  });
});
