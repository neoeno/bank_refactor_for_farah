describe("Formatter functions", () => {


  beforeEach(() => {
    formatter = new Formatter();
  })

  describe("#formatDepositTransactions", () => {
    xit("calls on the private formatDepositTransaction method", () => {
      spyOn<any>(formatter, "formatDepositTransaction");
      formatter.formatDepositTransactions(3,3);
      expect(formatDepositTransaction).toHaveBeenCalled();
    })
  })


  describe("#formatWithdrawTransactions", () => {
    xit("calls on the private formatWithdrawTransaction method", () => {
      // test the the private method has been called
    })
  })

})
