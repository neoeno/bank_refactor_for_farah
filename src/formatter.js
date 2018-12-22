function Formatter () {
  this._transactionsHolder = []
}

Formatter.prototype._formatDepositTransactions = function (amount, balance) {
  let arr = []
  let depositedAmount = this._amountToDecimal(amount)
  let currentBalance = this._amountToDecimal(balance)
  let date = this._formatDate()
  arr.push(date, depositedAmount, '      ', currentBalance)
  this._transactionsHolder.push(arr.join('  ||  '))
}

Formatter.prototype._formatWithdrawTransactions = function (amount, balance) {
  let arr = []
  let withdrawnAmount = this._amountToDecimal(amount)
  let currentBalance = this._amountToDecimal(balance)
  let date = this._formatDate()
  arr.push(date, '      ', withdrawnAmount, currentBalance)
  this._transactionsHolder.push(arr.join('  ||  '))
}

Formatter.prototype._sendFormattedTransaction = function () {
  let latestTransaction = this._transactionsHolder.splice(0, 1)
  return latestTransaction
}

Formatter.prototype._amountToDecimal = function (num) {
  let decimaledAmount = (parseFloat(Math.round(num * 100) / 100).toFixed(2))
  return decimaledAmount
}

Formatter.prototype._formatDate = function () {
  let date = new Date()
  let day = date.getDate()
  let month = (date.getMonth() + 1)
  let year = date.getFullYear()
  if (day < 10)(day = '0' + day)
  if (month < 10)(month = '0' + month)
  let formattedDate = (day + '/' + month + '/' + year)
  return formattedDate
}
