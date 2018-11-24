function Statement() {
  this._statementArr = [
    ['   Date     ||  Credit   ||  Debit   ||  Balance  ']
  ];
}
Statement.prototype.printSatement = function() {
  return this._statementArr;
}

Statement.prototype._newTransaction = function(transaction) {
  this._statementArr.splice(1, 0, transaction);
}
