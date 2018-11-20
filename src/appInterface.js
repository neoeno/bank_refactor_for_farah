function Bankapp () {

  let balance = 0;
  const notANumber = "Amount must an integer greater then 1";
  const insufF = "Insuficcient funds";

  Bankapp.prototype.showBalance = () => {
    return balance;
  }

  Bankapp.prototype.deposit = (amount) => {
    if ( amount < 1 || amount % 1 !== 0 ) {
      return notANumber;
    } else {
      balance = balance + amount;
    }
  }

  Bankapp.prototype.withdraw = (amount) => {
    if (amount > balance || amount % 1 !== 0) {
      return insufF
    } else {
      balance = balance - amount;
    }
  }
}
