describe("Interface functinos", () => {
  let bankapp = new Bankapp();

  describe("#balance", () => {
    it("starts with zero balance", () => {
      expect(bankapp.showBalance()).toEqual(0)
    })

    it("increases the balance if amount is deposited", () => {
      bankapp.deposit(100);
      expect(bankapp.showBalance()).toEqual(100)
    })
  })
})
