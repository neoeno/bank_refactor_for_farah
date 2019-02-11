function PrintFormatter () {
  this._transactionsHolder = [];
}

PrintFormatter.prototype.formatStatement = function (statement) {
  const header = "   Date     ||  Credit   ||  Debit   ||  Balance  ";
  const formattedTransactions = statement.map(transaction =>
    this._formatTransaction(transaction))
  return [header, ...formattedTransactions].join("\n")
}

PrintFormatter.prototype._formatTransaction = function (transaction) {
  if (transaction.kind == "deposit") {
    return this._formatDeposit(transaction.amount, transaction.balance);
  } else {
    return this._formatWithdraw(transaction.amount, transaction.balance);
  }
}

PrintFormatter.prototype._formatDeposit = function (amount, balance) {
  let arr = [];
  let depositedAmount = this._formatAmountToDecimal(amount);
  let currentBalance = this._formatAmountToDecimal(balance);
  let date = this._formatDate();
  arr.push(date, depositedAmount, '      ', currentBalance);
  return arr.join('  ||  ');
};

PrintFormatter.prototype._formatWithdraw = function (amount, balance) {
  let arr = [];
  let withdrawnAmount = this._formatAmountToDecimal(amount);
  let currentBalance = this._formatAmountToDecimal(balance);
  let date = this._formatDate();
  arr.push(date, '      ', withdrawnAmount, currentBalance);
  return arr.join('  ||  ');
};

PrintFormatter.prototype._formatAmountToDecimal = function (num) {
  let decimaledAmount = (parseFloat(Math.round(num * 100) / 100).toFixed(2));
  return decimaledAmount;
};

PrintFormatter.prototype._formatDate = function () {
  let date = new Date();
  let day = date.getDate();
  let month = (date.getMonth() + 1);
  let year = date.getFullYear();
  if (day < 10)(day = '0' + day);
  if (month < 10)(month = '0' + month);
  let formattedDate = (day + '/' + month + '/' + year);
  return formattedDate;
};
