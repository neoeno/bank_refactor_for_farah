describe("Bank Application" , () => {

  beforeEach(() => {
    bankapp = new Bankapp();
    statement = new Statement();
  })

  describe("Correct inputs deposit/withdraw", () => {
    it("has the correct balance amount", () => {
      bankapp.deposit(100);
      bankapp.deposit(100);
      bankapp.withdraw(50);
      bankapp.withdraw(20);
      expect(bankapp.showBalance()).toEqual(130)
    })
  })

  describe("Incorrect imputs deposit/withdraw", () => {
    it("has the correct balance amount", () => {
      bankapp.deposit(-100);
      bankapp.deposit(100);
      bankapp.deposit(10.56);
      bankapp.withdraw(500);
      bankapp.withdraw(20);
      expect(bankapp.showBalance()).toEqual(80)
    })
  })

  describe("Transactions with print statement", () => {
    it("prints out all the transactions", () => {
      bankapp.deposit(100);
      bankapp.deposit(100);
      bankapp.withdraw(50);
      bankapp.withdraw(20);
      expect(bankapp.showBalance()).toEqual(130);
      spyOn(Statement.prototype, 'printSatement');
      bankapp.printStatement();
      expect(Statement.prototype.printSatement).toHaveBeenCalled();
    })
  })

  describe("Some incorrect transactions with print statement", () => {
    it("prints the correct number of transactions", () => {
      bankapp.deposit(-100);
      bankapp.deposit(100);
      bankapp.deposit(10.56);
      bankapp.withdraw(500);
      bankapp.withdraw(20);
      expect(bankapp.showBalance()).toEqual(80);
      spyOn(Statement.prototype, 'printSatement');
      bankapp.printStatement();
      expect(Statement.prototype.printSatement).toHaveBeenCalled();
    })
  })

})
