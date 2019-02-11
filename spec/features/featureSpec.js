describe('Bank Application', () => {
  let bankapp;
  let formatter;
  beforeEach(() => {
    bankapp = new BankApp();
    formatter = new PrintFormatter();
  });

  describe('Correct inputs deposit/withdraw', () => {
    it('has the correct balance amount', () => {
      bankapp.deposit(100);
      bankapp.deposit(100);
      bankapp.withdraw('50');
      bankapp.withdraw(20);
      expect(bankapp.showBalance()).toEqual(130);
    });
  });

  describe('Incorrect inputs deposit/withdraw', () => {
    it('has the correct balance amount', () => {
      bankapp.deposit(-100);
      bankapp.deposit(100);
      bankapp.deposit('100');
      bankapp.deposit(10.56);
      bankapp.withdraw(500);
      bankapp.withdraw(20);
      expect(bankapp.showBalance()).toEqual(180);
    });
  });

  describe('Transactions with print statement', () => {
    it('prints out all the transactions', () => {
      bankapp.deposit(100);
      bankapp.deposit(100);
      bankapp.withdraw(50);
      bankapp.withdraw(20);
      expect(bankapp.showBalance()).toEqual(130);
      let today = formatter._formatDate();
      spyOn(console, 'log');
      bankapp.printStatement()
      expect(console.log).toHaveBeenCalledWith(`   Date     ||  Credit   ||  Debit   ||  Balance  \n${today}  ||          ||  20.00  ||  130.00\n${today}  ||          ||  50.00  ||  150.00\n${today}  ||  100.00  ||          ||  200.00\n${today}  ||  100.00  ||          ||  100.00`);
    });
  });

  describe('Some incorrect transactions with print statement', () => {
    it('prints the correct number of transactions', () => {
      bankapp.deposit(-100);
      bankapp.deposit(100);
      bankapp.deposit(10.56);
      bankapp.withdraw(500);
      bankapp.withdraw(20);
      expect(bankapp.showBalance()).toEqual(80);
      let today = formatter._formatDate();
      spyOn(console, 'log');
      bankapp.printStatement()
      expect(console.log).toHaveBeenCalledWith(`   Date     ||  Credit   ||  Debit   ||  Balance  \n${today}  ||          ||  20.00  ||  80.00\n${today}  ||  100.00  ||          ||  100.00\n${today}  ||  100.00  ||          ||  100.00`);
    });
  });
});
