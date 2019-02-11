describe('statement functinos', () => {
  let statement;
  let formatter;
  beforeEach(() => {
    statement = new Statement();
    formatter = new PrintFormatter();
  });

  it('returns the array of transactions', () => {
    statement.receiveDeposit(50, 100);
    statement.receiveWithdraw(50, 50);
    let today = formatter._formatDate();
    expect(statement.returnStatement()).toEqual([
      { amount: 50, balance: 50, kind: "withdraw" },
      { amount: 50, balance: 100, kind: "deposit" }
    ]);
  });
});
