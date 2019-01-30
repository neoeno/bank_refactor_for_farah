describe('statement functinos', () => {
  let statement;
  let formatter;
  beforeEach(() => {
    statement = new Statement();
    formatter = new Formatter();
  });

  describe('#receiveDeposit', () => {
    it('adds the checked and formatted deposit transaction to the statement', () => {
      expect(statement._statementArr.length).toEqual(0);
      statement.receiveDeposit(50, 100);
      statement.receiveDeposit(50, 150);
      expect(statement._statementArr.length).toEqual(2);
    });
  });

  describe('#receiveWithdraw', () => {
    it('adds the checked and formatted withdraw transaction to the statement', () => {
      statement.receiveWithdraw(50, 50);
      expect(statement._statementArr.length).toEqual(1);
    });
  });

  describe('#returnstatement', () => {
    it('returns the array of transactions with the header', () => {
      statement.receiveDeposit(50, 100);
      statement.receiveWithdraw(50, 50);
      let today = formatter._formatDate();
      expect(statement.returnStatement()).toEqual([
        ['   Date     ||  Credit   ||  Debit   ||  Balance  '],
        [`${today}  ||          ||  50.00  ||  50.00`],
        [`${today}  ||  50.00  ||          ||  100.00`]
      ]);
    });
  });
});
