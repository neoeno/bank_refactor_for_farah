function Bankapp() {
  _formatter = new Formatter();
  _statement = new Statement();
  _errorLogger = new ErrorLogger();

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
    _formatter.formatDepositTransactions(this._depositAmount, this._balance)
  }
}

Bankapp.prototype.withdraw = function(amount) {
  this._checkWithdrawAmount(amount);
  if (this._withdrawAmount !== 0) {
    _formatter.formatWithdrawTransactions(amount, this._balance)
  }
}

Bankapp.prototype.printStatement = function() {
  return _statement.printSatement();
}

Bankapp.prototype._checkDepositAmount = function(amount) {
  if (amount < 1) {
    console.log(_errorLogger.greaterThanOne());
  } else if (isNaN(amount)) {
    console.log(_errorLogger.mustBeANumber());
  } else if (amount % 1 !== 0) {
    console.log(_errorLogger.mustBeAnInteger());
  } else {
    this._depositAmount = parseInt(amount);
    this._balance = this._balance + this._depositAmount;
  }
}

Bankapp.prototype._checkWithdrawAmount = function(amount) {
  if (amount > this._balance) {
    console.log(_errorLogger.insufficientFunds());
  } else if (isNaN(amount)) {
    console.log(_errorLogger.mustBeANumber());
  } else if (amount % 1 !== 0) {
    console.log(_errorLogger.mustBeAnInteger());
  } else {
    this._withdrawAmount = parseInt(amount);
    this._balance = this._balance - this._withdrawAmount;
  }
}
