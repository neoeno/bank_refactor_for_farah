function Statement () {
  this._formatter = new Formatter();
  this._statementArr = [
  ];
}

Statement.prototype.receiveDeposit = function (amount, balance) {
  this._statementArr.unshift({ amount: amount, balance: balance, kind: "deposit" });
};

Statement.prototype.receiveWithdraw = function (amount, balance) {
  this._statementArr.unshift({ amount: amount, balance: balance, kind: "withdraw" });
};

Statement.prototype.returnStatement = function (arr) {
  return this._statementArr;
};
