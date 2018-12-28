describe('Statement functinos', () => {
  beforeEach(() => {
    statement = new Statement();
    formatter = new Formatter();
  });

  describe('#depositReceived', () => {
    it('adds the deposit transaction to the statement', () => {
      expect(statement._statementArr.length).toEqual(1);
      statement.depositReceived(50, 100);
      statement.depositReceived(50, 150);
      expect(statement._statementArr.length).toEqual(3);
    });
  });

  describe('#withdrawReceived', () => {
    it('adds the withdraw transaction to the statement', () => {
      statement.withdrawReceived(50, 50);
      expect(statement._statementArr.length).toEqual(2);
    });
  });

  describe('#returnStatement', () => {
    it('returns the array of transactions with the header', () => {
      statement.depositReceived(50, 100);
      statement.withdrawReceived(50, 50);
      let today = formatter._formatDate();
      expect(statement.returnStatement()).toEqual([
        ['   Date     ||  Credit   ||  Debit   ||  Balance  '],
        [`${today}  ||          ||  50.00  ||  50.00`],
        [`${today}  ||  50.00  ||          ||  100.00`]
      ]);
    });
  });
});
