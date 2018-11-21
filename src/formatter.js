function Formatter () {
  let statement = new Statement();

  Formatter.prototype.formatDepositTransactions = (amount, balance) => {
    amnt = amount;
    bal = balance;
    formatDepositTransactions(amnt , bal)
  }

  Formatter.prototype.formatWithdrawTransactions = (amount, balance) => {
    amnt = amount;
    bal = balance;
    formatWithdrawTransactions(amnt , bal)
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

  function formatDepositTransactions(amnt , bal) {
    arr = []
    arr.push(formatNewDate(), amountToDecimal(amnt), '      ' , amountToDecimal(bal))
    statement.newTransaction(arr.join('  ||  '));
  }

  function formatWithdrawTransactions(amnt , bal){
  arr = []
  arr.push(formatNewDate(), '      ' , amountToDecimal(amnt), amountToDecimal(bal))
  statement.newTransaction(arr.join('  ||  '));
  }

}
