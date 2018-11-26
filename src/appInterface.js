function Bankapp() {
  this._formatter = new Formatter();
  this._errorLogger = new ErrorLogger();

  this._balance = 0;
  this._depositAmount = 0;
  this._withdrawAmount = 0;
}
Bankapp.prototype.showBalance = function() {
  return this._balance;
}

Bankapp.prototype.deposit = function(amount) {
  this._checkDepositAmount(amount);
  if (this._depositAmount !== 0) {
    this._formatter.formatDepositTransactions(this._depositAmount, this._balance)
  }
}

Bankapp.prototype.withdraw = function(amount) {
  this._checkWithdrawAmount(amount);
  if (this._withdrawAmount !== 0) {
    this._formatter.formatWithdrawTransactions(amount, this._balance)
  }
}

Bankapp.prototype.printStatement = function() {
  return this._formatter._statement.printSatement();
}

Bankapp.prototype._checkDepositAmount = function(amount) {
  if (amount < 1) {
    console.log(this._errorLogger.greaterThanOne());
  } else if (isNaN(amount)) {
    console.log(this._errorLogger.mustBeANumber());
  } else if (amount % 1 !== 0) {
    console.log(this._errorLogger.mustBeAnInteger());
  } else {
    this._depositAmount = parseInt(amount);
    this._balance = this._balance + this._depositAmount;
  }
}

Bankapp.prototype._checkWithdrawAmount = function(amount) {
  if (amount > this._balance) {
    console.log(this._errorLogger.insufficientFunds());
  } else if (isNaN(amount)) {
    console.log(this._errorLogger.mustBeANumber());
  } else if (amount % 1 !== 0) {
    console.log(this._errorLogger.mustBeAnInteger());
  } else {
    this._withdrawAmount = parseInt(amount);
    this._balance = this._balance - this._withdrawAmount;
  }
}
