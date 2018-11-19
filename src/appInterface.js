function Bankapp () {
  let myBalance = (amount, balance = 0) => {
    if (amount) {
      balance = balance + amount;
      return balance;
    } else {
      return balance;
    }
  }

  Bankapp.prototype.showBalance = function (){
    return myBalance();
  }


  
}
