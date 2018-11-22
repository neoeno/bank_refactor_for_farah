describe("ErrorLogger functions", () => {

  beforeEach(() => {
    errorlogger = new ErrorLogger();
  })

  describe(("#greaterThanOne"), () => {
    it("returns Amount must an integer greater than 1", () => {
      console.log = jasmine.createSpy("log");
      errorlogger.greaterThanOne();
      expect(console.log).toHaveBeenCalled();
    })
  })

  describe(("#mustBeANumber"), () => {
    it("returns Amount must be a number", () => {
      console.log = jasmine.createSpy("log");
      errorlogger.mustBeANumber();
      expect(console.log).toHaveBeenCalled();
    })
  })

  describe(("#mustBeAnInteger"), () => {
    it("returns Amount must be an integer", () => {
      console.log = jasmine.createSpy("log");
      errorlogger.mustBeAnInteger();
      expect(console.log).toHaveBeenCalled();
    })
  })

  describe(("#insufficientFunds"), () => {
    it("returns Insuficcient funds", () => {
      console.log = jasmine.createSpy("log");
      errorlogger.insufficientFunds();
      expect(console.log).toHaveBeenCalled();
    })
  })

})
