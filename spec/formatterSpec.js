describe("Formatter functinos", () => {


  beforeEach(() => {
    formatter = new Formatter();
  })

  describe("#amountToDecimal", () => {
    it("Integer to flaot", () => {
      expect(amountToDecimal(7)).toEqual('7.00')
    })
  })

  describe("#formatCreditTransactions", () => {
    it("Returns a formatted array", () => {
      expect(formatCreditTransactions(4,4)).toEqual('20/11/2018  ||  4.00  ||          ||  4.00')
    })
  })

  describe("#formatWithdrawTransactions", () => {
    it("Returns a formatted array", () => {
      expect(formatWithdrawTransactions(4,4)).toEqual('20/11/2018  ||          ||  4.00  ||  4.00')
    })
  })


})
