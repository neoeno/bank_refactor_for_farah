describe("Interface functions", () => {

  beforeEach(() => {
    bankapp = new Bankapp();
  })

  describe("#deposit", () => {
    it("increases the balance if amount is deposited", () => {
      bankapp.deposit(100);
      expect(bankapp.showBalance()).toEqual(100)
    })

    it("does not change the balance if amount is less than 1", () => {
      bankapp.deposit(100);
      bankapp.deposit(-4);
      expect(bankapp.showBalance()).toEqual(100)
    })

    it("does not change the balance if amount is not an integer", () => {
      bankapp.deposit(100);
      bankapp.deposit(1.4);
      expect(bankapp.showBalance()).toEqual(100)
    })

  })

  describe("#withdraw", () => {
    it("withdraws the amount from balance", () => {
      bankapp.deposit(100);
      bankapp.withdraw(50);
      expect(bankapp.showBalance()).toEqual(50)
    })

    it("does not withdraw the amount from balance if amount is greater than balance", () => {
      bankapp.deposit(100);
      bankapp.withdraw(500);
      expect(bankapp.showBalance()).toEqual(100)
    })

    it("does not withdraw the amount from balance if amount is not in integer", () => {
      bankapp.deposit(100);
      bankapp.withdraw(10.4);
      expect(bankapp.showBalance()).toEqual(100)
    })
  })

})
