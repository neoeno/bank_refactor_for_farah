function Bankapp () {

  let balance = 0;

  Bankapp.prototype.showBalance = () => {
    return balance;
  }

  Bankapp.prototype.deposit = (amount) => {
    if ( amount < 1 || amount % 1 !== 0  ) {
      return 'Amount must an integer greater then 1'
    } else {
      balance = balance + amount;
    }
  }

  Bankapp.prototype.withdraw = (amount) => {
    if (amount > balance) {
      return 'Insuficcient funds'
    } else {
      balance = balance - amount;
    }
  }
}
