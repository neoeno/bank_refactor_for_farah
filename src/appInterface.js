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
    if (amount < 1) return greaterThanOne;
    if (isNaN(amount)) return mustBeANumber;
    if (amount % 1 !== 0) return mustBeAnInteger;
    balance = balance + parseInt(amount);
    formatter.formatDepositTransactions(amount, balance);
  }

  Bankapp.prototype.withdraw = (amount) => {
    if (amount > balance) return insufficientFunds;
    if (isNaN(amount)) return mustBeANumber;
    if (amount % 1 !== 0) return mustBeAnInteger ;
    balance = balance - parseInt(amount);
    formatter.formatWithdrawTransactions(amount, balance);
  }

  Bankapp.prototype.printStatement = () => {
    statement.printSatement();
  }

}
