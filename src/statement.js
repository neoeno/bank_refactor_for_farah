/* global Formatter */
function Statement () {
  this._formatter = new Formatter()
  this._statementArr = [
    ['   Date     ||  Credit   ||  Debit   ||  Balance  ']
  ]
}

Statement.prototype._depositReceived = function (amount, balance) {
  this._formatter._formatDepositTransactions(amount, balance)
  this._addTransactionToStatement()
}

Statement.prototype._withdrawReceived = function (amount, balance) {
  this._formatter._formatWithdrawTransactions(amount, balance)
  this._addTransactionToStatement()
}
Statement.prototype._addTransactionToStatement = function () {
  let transaction = this._formatter._sendFormattedTransaction()
  this._statementArr.splice(1, 0, transaction)
}

Statement.prototype._returnStatement = function (arr) {
  return this._statementArr
}
