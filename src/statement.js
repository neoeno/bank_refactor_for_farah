function Statement () {
  let statementArr = []
  let statementHeader = ['   Date     ||  Credit   ||  Debit   ||  Balance  ']

  Statement.prototype.printSatement = () => {
    statementArr.push(statementHeader)
    console.log(statementArr);
    return statementArr
  }

}
