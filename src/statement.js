function Statement () {
  this._formatter = new Formatter();
  this._statementArr = [
  ];
}

Statement.prototype.receiveDeposit = function (amount, balance) {
  this._formatter.formatDepositTransactions(amount, balance);
  this._addTransactionToStatement();
};

Statement.prototype.receiveWithdraw = function (amount, balance) {
  this._formatter.formatWithdrawTransactions(amount, balance);
  this._addTransactionToStatement();
};

Statement.prototype.returnStatement = function (arr) {
  const header = ['   Date     ||  Credit   ||  Debit   ||  Balance  '];
  return [header, ...this._statementArr];
};

Statement.prototype._addTransactionToStatement = function () {
  let transaction = this._formatter.sendFormattedTransaction();
  this._statementArr.unshift(transaction);
};
