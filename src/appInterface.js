function Bankapp () {

  let balance = 0;
  const notANumber = "Amount must an integer greater than 1";
  const insufF = "Insuficcient funds";
  let formatter = new Formatter();
  let statement = new Statement();

  Bankapp.prototype.showBalance = () => {
    return balance;
  }

  Bankapp.prototype.deposit = (amount) => {
    if ( amount < 1 || amount % 1 !== 0 ) {
      return notANumber;
    } else {
      balance = balance + amount;
      formatter.formatDepositTransactions(amount, balance)
    }
  }

  Bankapp.prototype.withdraw = (amount) => {
    if (amount > balance || amount % 1 !== 0) {
      return insufF
    } else {
      balance = balance - amount;
      formatter.formatWithdrawTransactions(amount, balance)
    }
  }

  Bankapp.prototype.printStatement = () => {
    statement.printSatement();
    return statement.printSatement();
  }

}
