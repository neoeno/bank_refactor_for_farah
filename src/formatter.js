function Formatter () {
  let statement = new Statement();

  Formatter.prototype.formatDepositTransactions = (amount, balance) => {
    amnt = amount;
    bal = balance;
    formatDepositTransaction(amnt , bal)
  }

  Formatter.prototype.formatWithdrawTransactions = (amount, balance) => {
    amnt = amount;
    bal = balance;
    formatWithdrawTransaction(amnt , bal)
  }

  function formatNewDate() {
     let date = new Date()
     let day = date.getDate()
     let month = date.getMonth() + 1
     let year = date.getFullYear()

     if (day < 10) (day = '0' + day)
     if (month < 10) (month = '0' + month)

     let formattedDate = day + '/' + month + '/' + year

     return formattedDate
  }

  function amountToDecimal(num) {
    let decimaled_amount = parseFloat(Math.round(num * 100) / 100).toFixed(2)
    return decimaled_amount;
  }

  function formatDepositTransaction(amnt , bal) {
    arr = []
    arr.push(formatNewDate(), amountToDecimal(amnt), '      ' , amountToDecimal(bal))
    statement.newTransaction(arr.join('  ||  '));
  }

  function formatWithdrawTransaction(amnt , bal){
  arr = []
  arr.push(formatNewDate(), '      ' , amountToDecimal(amnt), amountToDecimal(bal))
  statement.newTransaction(arr.join('  ||  '));
  }

}
