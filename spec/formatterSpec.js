describe("Formatter functions", () => {


  beforeEach(() => {
    formatter = new Formatter();
  })

  describe("#formatDepositTransactions", () => {
    it("calls on the private formatDepositTransaction method", () => {
      spyOn<any>(formatter, "formatDepositTransaction");
      formatter.formatDepositTransactions(3,3);
      expect(formatDepositTransaction).toHaveBeenCalled();
    })
  })


  // describe("Person", function() {
  //     it("calls the sayHello() function", function() {
  //         var fakePerson = new Person();
  //         spyOn(fakePerson, "sayHello");
  //         fakePerson.helloSomeone("world");
  //         expect(fakePerson.sayHello).toHaveBeenCalled();
  //     });
  // });

  describe("#formatWithdrawTransactions", () => {
    xit("calls on the private formatWithdrawTransaction method", () => {
      // test the the private method has been called
    })
  })

})
