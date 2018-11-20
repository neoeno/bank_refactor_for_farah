describe("Interface functinos", () => {

  beforeEach(() => {
    bankapp = new Bankapp();
  })


  describe("#balance", () => {
    it("starts with zero balance", () => {
      expect(bankapp.showBalance()).toEqual(0)
    })
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
  })

})
