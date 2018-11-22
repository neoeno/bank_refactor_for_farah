function Bankapp () {
  let formatter = new Formatter();
  let statement = new Statement();
  let errorLogger = new ErrorLogger();

  let balance = 0;
  let depositAmount = 0;
  let withdrawAmount = 0;

  Bankapp.prototype.showBalance = () => {
    return balance;
  }

  Bankapp.prototype.deposit = (amount) => {
    checkDepositAmount(amount);
    if (depositAmount !== 0) {
      formatter.formatDepositTransactions(depositAmount, balance)
    }
  }

  Bankapp.prototype.withdraw = (amount) => {
    checkWithdrawAmount(amount);
    if (withdrawAmount !== 0) {
      formatter.formatWithdrawTransactions(amount, balance)
    }
  }

  Bankapp.prototype.printStatement = () => {
    statement.printSatement();
  }

  function checkDepositAmount(amount) {
    if (amount < 1) {
      errorLogger.greaterThanOne();
    } else if (isNaN(amount)) {
      errorLogger.mustBeANumber();
    } else if (amount % 1 !== 0) {
      errorLogger.mustBeAnInteger();
    } else {
      depositAmount = parseInt(amount)
      balance = balance + depositAmount;
    }
  }

  function checkWithdrawAmount(amount) {
    if (amount > balance) {
      console.log(insufficientFunds)
    } else if (isNaN(amount)) {
      console.log(mustBeANumber)
    } else if (amount % 1 !== 0) {
      console.log(mustBeAnInteger)
    } else {
      withdrawAmount = parseInt(amount)
      balance = balance - withdrawAmount;
    }
  }

}
