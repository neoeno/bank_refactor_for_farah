function Formatter () {
  let amnt = 0;
  let bal = 0;

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

function formatCreditTransactions(amnt , bal) {
  arr = []
  arr.push(formatNewDate(), amountToDecimal(amnt), '      ' , amountToDecimal(bal))
  return (arr.join('  ||  '));
}

function formatWithdrawTransactions (amnt , bal){
arr = []
arr.push(formatNewDate(), '      ' , amountToDecimal(amnt), amountToDecimal(bal))
return (arr.join('  ||  '));
}
