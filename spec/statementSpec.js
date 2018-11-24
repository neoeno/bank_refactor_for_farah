describe("Statement functions", () => {

  beforeEach(() => {
    statement = new Statement();
  })


  describe("#printSatement", () => {
    it("returns the formated statement with the heading", () => {
      expect(statement.printSatement()).toEqual([
        ['   Date     ||  Credit   ||  Debit   ||  Balance  ']
      ]);
    })
  })

  describe("#newTransaction", () => {
    it("adds the transaction under the statement heading", () => {
      statement._newTransaction(['24/11/2018  ||  4.00  ||          ||  4.00']);
      expect(statement.printSatement()).toEqual([
        ['   Date     ||  Credit   ||  Debit   ||  Balance  '],
        [
          ['24/11/2018  ||  4.00  ||          ||  4.00']
        ]
      ]);
    })
  })

})
