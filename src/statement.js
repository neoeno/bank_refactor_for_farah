function Statement () {
  this._formatter = new Formatter();
  this._statementArr = [
    ['   Date     ||  Credit   ||  Debit   ||  Balance  ']
  ];
}

Statement.prototype.depositReceived = function (amount, balance) {
  this._formatter.formatDepositTransactions(amount, balance);
  this._addTransactionToStatement();
};

Statement.prototype.withdrawReceived = function (amount, balance) {
  this._formatter.formatWithdrawTransactions(amount, balance);
  this._addTransactionToStatement();
};
Statement.prototype._addTransactionToStatement = function () {
  let transaction = this._formatter.sendFormattedTransaction();
  this._statementArr.splice(1, 0, transaction);
};

Statement.prototype.returnStatement = function (arr) {
  return this._statementArr;
};
