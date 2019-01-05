function Bankapp () {
  this._statement = new Statement();
  this._errorLogger = new ErrorLogger();

  this._balance = 0;
  this._depositAmount = 0;
  this._withdrawAmount = 0;
}
Bankapp.prototype.showBalance = function () {
  return this._balance;
};

Bankapp.prototype.deposit = function (amount) {
  this._checkDepositAmount(amount);
  if (this._depositAmount !== 0) {
    let depositedAmount = this._depositAmount;
    let currentBalance = this._balance;
    this._statement.receiveDeposit(depositedAmount, currentBalance);
  }
};

Bankapp.prototype.withdraw = function (amount) {
  this._checkWithdrawAmount(amount);
  if (this._withdrawAmount !== 0) {
    let withdrawnAmount = this._withdrawAmount;
    let currentBalance = this._balance;
    this._statement.receiveWithdraw(withdrawnAmount, currentBalance);
  }
};

Bankapp.prototype._checkDepositAmount = function (amount) {
  if (amount < 1) {
    console.log(this._errorLogger.returnLessThanOne());
  } else if (isNaN(amount)) {
    console.log(this._errorLogger.returnNotANumber());
  } else if (amount % 1 !== 0) {
    console.log(this._errorLogger.returnNotAnInteger());
  } else {
    this._depositAmount = parseInt(amount);
    this._balance += this._depositAmount;
  }
};

Bankapp.prototype.printStatement = function () {
  return this._statement.returnStatement();
};

Bankapp.prototype._checkWithdrawAmount = function (amount) {
  if (amount > this._balance) {
    console.log(this._errorLogger.returnInsufficientFunds());
  } else if (isNaN(amount)) {
    console.log(this._errorLogger.returnNotANumber());
  } else if (amount % 1 !== 0) {
    console.log(this._errorLogger.returnNotAnInteger());
  } else {
    this._withdrawAmount = parseInt(amount);
    this._balance -= this._withdrawAmount;
  }
};
