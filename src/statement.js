function Statement () {
  let statementArr = ['   Date     ||  Credit   ||  Debit   ||  Balance  '];

  Statement.prototype.printSatement = () => {
    for (let i = 0; i < statementArr.length; i++) {
      console.log(statementArr[i]);
    }
  }

  Statement.prototype.newTransaction = (transaction) => {
    statementArr.splice(1,0, transaction);
  }

}
