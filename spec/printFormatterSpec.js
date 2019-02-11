describe('formatter functions', () => {
  let formatter;
  beforeEach(() => {
    formatter = new PrintFormatter();
  });

  describe('#formatStatement', () => {
    it("formats a typical statement", () => {
      let today = formatter._formatDate();
      const result = formatter.formatStatement([
        {amount: 25, balance: 75, kind: "withdraw"},
        {amount: 50, balance: 50, kind: "deposit"}
      ]);
      expect(result).toEqual(`   Date     ||  Credit   ||  Debit   ||  Balance  \n${today}  ||          ||  25.00  ||  75.00\n${today}  ||  50.00  ||          ||  50.00`)
    })
  })
});
