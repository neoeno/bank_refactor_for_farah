/* global Statement, ErrorLogger */

function Bankapp () {
  this._statement = new Statement()
  this._errorLogger = new ErrorLogger()

  this._balance = 0
  this._depositAmount = 0
  this._withdrawAmount = 0
}
Bankapp.prototype.showBalance = function () {
  return this._balance
}

Bankapp.prototype.deposit = function (amount) {
  this._checkDepositAmount(amount)
  if (this._depositAmount !== 0) {
    this._statement._depositReceived(this._depositAmount, this._balance)
  }
}

Bankapp.prototype.withdraw = function (amount) {
  this._checkWithdrawAmount(amount)
  if (this._withdrawAmount !== 0) {
    this._statement._withdrawReceived(this._withdrawAmount, this._balance)
  }
}

Bankapp.prototype._checkDepositAmount = function (amount) {
  if (amount < 1) {
    console.log(this._errorLogger._greaterThanOne())
  } else if (isNaN(amount)) {
    console.log(this._errorLogger._mustBeANumber())
  } else if (amount % 1 !== 0) {
    console.log(this._errorLogger._mustBeAnInteger())
  } else {
    this._depositAmount = parseInt(amount)
    this._balance += this._depositAmount
  }
}

Bankapp.prototype._checkWithdrawAmount = function (amount) {
  if (amount > this._balance) {
    console.log(this._errorLogger._insufficientFunds())
  } else if (isNaN(amount)) {
    console.log(this._errorLogger._mustBeANumber())
  } else if (amount % 1 !== 0) {
    console.log(this._errorLogger._mustBeAnInteger())
  } else {
    this._withdrawAmount = parseInt(amount)
    this._balance -= this._withdrawAmount
  }
}

Bankapp.prototype.printStatement = function () {
  return this._statement._returnStatement()
}
