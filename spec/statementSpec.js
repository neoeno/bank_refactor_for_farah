describe("Statement functions", () => {

  beforeEach(() => {
    statement = new Statement();
  })


  describe("#printSatement", () => {
    it("returns the formated statement with the deading", () => {
      expect((statement.printSatement()).length).toEqual(1)
    })
  })


})
