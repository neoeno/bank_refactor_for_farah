function Bankapp () {

  let balance = 0;
  const notANumber = "Amount must an integer greater than 1";
  const insufficientFunds = "Insuficcient funds";
  let formatter = new Formatter();
  let statement = new Statement();

  Bankapp.prototype.showBalance = () => {
    return balance;
  }

  Bankapp.prototype.deposit = (amount) => {
    amount = parseInt(amount);
    if (amount < 1 || isNaN(amount)) {
      return notANumber;
    } else {
      balance = balance + amount;
      formatter.formatDepositTransactions(amount, balance)
    }
  }

  Bankapp.prototype.withdraw = (amount) => {
    amount = parseInt(amount);
    if (amount > balance || isNaN(amount)) {
      return insufficientFunds
    } else {
      balance = balance - amount;
      formatter.formatWithdrawTransactions(amount, balance)
    }
  }

  Bankapp.prototype.printStatement = () => {
    statement.printSatement();
    // return statement.printSatement();
  }

}
