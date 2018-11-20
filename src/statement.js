function Statement () {
  let statementArr = [];
  let statementHeader = ['   Date     ||  Credit   ||  Debit   ||  Balance  '];
  let mockTransaction = ['20/11/2018  ||  33.00  ||          ||  33.00']

  Statement.prototype.printSatement = () => {
    statementArr.splice(0, 0, statementHeader)
    return statementArr
  }

  Statement.prototype.newTransaction = (transaction) => {
    transaction = mockTransaction;
    statementArr.splice(1,0, transaction)
  }

}
