describe("Statement functions", () => {

  beforeEach(() => {
    statement = new Statement();
  })


  describe("#printSatement", () => {
    it("returns the formated statement with the heading", () => {
      console.log = jasmine.createSpy("log");
      statement.printSatement();
      expect(console.log).toHaveBeenCalled();
    })
  })

})
