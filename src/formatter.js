function Formatter () {
  this._transactionsHolder = [];
}

Formatter.prototype.formatStatement = function (statement) {
  const header = "   Date     ||  Credit   ||  Debit   ||  Balance  ";
  return [header, ...statement].join("\n")
}

Formatter.prototype.formatDepositTransactions = function (amount, balance) {
  this._formatDeposit(amount, balance);
};

Formatter.prototype.sendFormattedTransaction = function () {
  let latestTransaction = this._transactionsHolder.splice(0, 1);
  return latestTransaction;
};

Formatter.prototype.formatWithdrawTransactions = function (amount, balance) {
  this._formatWithdraw(amount, balance);
};

Formatter.prototype._formatDeposit = function (amount, balance) {
  let arr = [];
  let depositedAmount = this._formatAmountToDecimal(amount);
  let currentBalance = this._formatAmountToDecimal(balance);
  let date = this._formatDate();
  arr.push(date, depositedAmount, '      ', currentBalance);
  this._transactionsHolder.push(arr.join('  ||  '));
};

Formatter.prototype._formatWithdraw = function (amount, balance) {
  let arr = [];
  let withdrawnAmount = this._formatAmountToDecimal(amount);
  let currentBalance = this._formatAmountToDecimal(balance);
  let date = this._formatDate();
  arr.push(date, '      ', withdrawnAmount, currentBalance);
  this._transactionsHolder.push(arr.join('  ||  '));
};

Formatter.prototype._formatAmountToDecimal = function (num) {
  let decimaledAmount = (parseFloat(Math.round(num * 100) / 100).toFixed(2));
  return decimaledAmount;
};

Formatter.prototype._formatDate = function () {
  let date = new Date();
  let day = date.getDate();
  let month = (date.getMonth() + 1);
  let year = date.getFullYear();
  if (day < 10)(day = '0' + day);
  if (month < 10)(month = '0' + month);
  let formattedDate = (day + '/' + month + '/' + year);
  return formattedDate;
};
