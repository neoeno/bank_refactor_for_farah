describe('formatter functions', () => {
  let formatter;
  beforeEach(() => {
    formatter = new Formatter();
  });

  describe('#formatDepositTransactions', () => {
    it('formats the deposit transactions as per the requierments', () => {
      formatter.formatDepositTransactions(44, 44);
      let today = formatter._formatDate();
      expect(formatter._transactionsHolder).toEqual([`${today}  ||  44.00  ||          ||  44.00`]);
    });
  });

  describe('#formatWithdrawTransactions', () => {
    it('formats the withdraw transactions as per the requierments', () => {
      formatter.formatWithdrawTransactions(44, 44);
      let today = formatter._formatDate();
      expect(formatter._transactionsHolder).toEqual([`${today}  ||          ||  44.00  ||  44.00`]);
    });
  });

  describe('#sendFormattedTransaction', () => {
    it('returns the formatted deposit transaction to statement', () => {
      formatter.formatDepositTransactions(40, 80);
      expect(formatter._transactionsHolder.length).toEqual(1);
      formatter.sendFormattedTransaction();
      expect(formatter._transactionsHolder.length).toEqual(0);
    });

    it('returns the formatted withdraw transaction to statement', () => {
      formatter.formatWithdrawTransactions(40, 80);
      expect(formatter._transactionsHolder.length).toEqual(1);
      formatter.sendFormattedTransaction();
      expect(formatter._transactionsHolder.length).toEqual(0);
    });
  });

  describe('#formatStatement', () => {
    it("formats a typical statement", () => {
      const result = formatter.formatStatement(["30/01/2019  ||  50.00  ||          ||  100.00"]);
      expect(result).toEqual("   Date     ||  Credit   ||  Debit   ||  Balance  \n30/01/2019  ||  50.00  ||          ||  100.00")
    })
  })
});
