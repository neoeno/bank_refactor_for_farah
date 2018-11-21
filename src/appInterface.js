function Bankapp () {

  let balance = 0;
  const greaterThanOne = "Amount must an integer greater than 1";
  const mustBeANumber = "Amount must be a number";
  const mustBeAnInteger = "Amount must be an integer";
  const insufficientFunds = "Insuficcient funds";
  
  let formatter = new Formatter();
  let statement = new Statement();

  Bankapp.prototype.showBalance = () => {
    return balance;
  }

  Bankapp.prototype.deposit = (amount) => {
    if (amount < 1) return "Amount must be an integer greater than 1";
    if (isNaN(amount)) return "Amount must be a number";
    if (amount % 1 !== 0) return "Amount must be an integer";
    balance = balance + amount;
    formatter.formatDepositTransactions(amount, balance)
  }

  Bankapp.prototype.withdraw = (amount) => {
    if (amount > balance) return "Insuficcient funds";
    if (isNaN(amount)) return "Amount must be a number"
    if (amount % 1 !== 0) return "Amount must be an integer";
    balance = balance - amount;
    formatter.formatWithdrawTransactions(amount, balance)
  }

  Bankapp.prototype.printStatement = () => {
    statement.printSatement();
    // return statement.printSatement();
  }

}
