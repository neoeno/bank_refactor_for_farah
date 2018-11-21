describe("Formatter functions", () => {


  beforeEach(() => {
    formatter = new Formatter();
  })

  describe("#formatDepositTransactions", () => {
    xit("calls on the private formatDepositTransaction method", () => {
      spyOn(window, "formatter").and.callFake( () => {
      spyOn(formatter, 'formatDepositTransaction');
      return formatter;
      })
      formatter.formatDepositTransactions(3,3);
      expect(formatter.formatDepositTransaction).toHaveBeenCalled();
    })
  })

  describe("#formatWithdrawTransactions", () => {
    xit("calls on the private formatWithdrawTransaction method", () => {
      // test the the private method has been called
    })
  })

})
