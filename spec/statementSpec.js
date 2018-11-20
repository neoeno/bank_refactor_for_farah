describe("Statement functions", () => {

  beforeEach(() => {
    statement = new Statement();
  })


  describe("#printSatement", () => {
    it("returns the formated statement with the deading", () => {
      expect((statement.printSatement()).length).toEqual(1)
    })
  })

  describe("#newTransaction", () => {
    it("adds all transactions to final statement", () => {
      statement.newTransaction(['20/11/2018  ||  33.00  ||          ||  33.00']);
      expect((statement.printSatement()).length).toEqual(2)
    })
  })

})
