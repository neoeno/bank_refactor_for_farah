describe("Bank Application" , () => {

  beforeEach(() => {
    bankapp = new Bankapp();
  })

  describe("Happy Path deposit/withdraw", () => {
    it("has the correct balance amount", () => {
      bankapp.deposit(100);
      bankapp.deposit(100);
      bankapp.withdraw(50);
      bankapp.withdraw(20);
      expect(bankapp.showBalance()).toEqual(130)
    })
  })

  describe("Unhappy Path deposit/withdraw", () => {
    it("has the correct balance amount", () => {
      bankapp.deposit(-100);
      bankapp.deposit(100);
      bankapp.withdraw(500);
      bankapp.withdraw(20);
      expect(bankapp.showBalance()).toEqual(80)
    })
  })

  
})
