function Bankapp () {

  let balance = 0;

  Bankapp.prototype.showBalance = () => {
    return balance;
  }

  Bankapp.prototype.deposit = (amount) => {
    if (amount < 1) {
      console.log("Amount must be greater then 1")
    } else {
      balance = balance + amount;
    }

  }

  Bankapp.prototype.withdraw = (amount) => {
  }
}
