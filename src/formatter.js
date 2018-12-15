function Formatter() {
  this._statementArr = [
    ['   Date     ||  Credit   ||  Debit   ||  Balance  ']
  ];
}

Formatter.prototype.formatDepositTransactions = function(amount, balance) {
  this._formatDepositTransaction(amount, balance);
}

Formatter.prototype.formatWithdrawTransactions = function(amount, balance) {
  this._formatWithdrawTransaction(amount, balance);
}

Formatter.prototype.returnStatement = function() {
  return this._statementArr;
}

Formatter.prototype._newTransaction = function(transaction) {
  let arr = [];
  arr.push(transaction);
  this._statementArr.splice(1, 0, arr);
}

Formatter.prototype._formatNewDate = function() {
  let date = new Date();
  let day = date.getDate();
  let month = (date.getMonth() + 1);
  let year = date.getFullYear();
  if (day < 10)(day = '0' + day);
  if (month < 10)(month = '0' + month);
  let formattedDate = (day + '/' + month + '/' + year);
  return formattedDate;
}

Formatter.prototype._amountToDecimal = function(num) {
  let decimaled_amount = (parseFloat(Math.round(num * 100) / 100).toFixed(2));
  return decimaled_amount;
}

Formatter.prototype._formatDepositTransaction = function(amnt, bal) {
  let arr = [];
  arr.push(this._formatNewDate(), this._amountToDecimal(amnt), '      ', this._amountToDecimal(bal));
  this._newTransaction(arr.join('  ||  '));
  return arr;
}

Formatter.prototype._formatWithdrawTransaction = function(amnt, bal) {
  let arr = [];
  arr.push(this._formatNewDate(), '      ', this._amountToDecimal(amnt), this._amountToDecimal(bal));
  this._newTransaction(arr.join('  ||  '));
  return arr;
}
