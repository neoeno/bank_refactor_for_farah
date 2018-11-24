  describe("Interface functions", () => {

    beforeEach(() => {
      bankapp = new Bankapp();
      formatter = new Formatter();
    })

    describe("#deposit", () => {
      it("increases the balance if amount is deposited", () => {
        bankapp.deposit(100);
        expect(bankapp.showBalance()).toEqual(100);
      })

      it("does not change the balance if amount is less than 1", () => {
        bankapp.deposit(100);
        bankapp.deposit(-4);
        expect(bankapp.showBalance()).toEqual(100);
      })

      it("does not change the balance if amount is not an integer", () => {
        bankapp.deposit(100);
        bankapp.deposit(1.4);
        expect(bankapp.showBalance()).toEqual(100);
      })

      it("returns an error if amount is a flaot", () => {
        console.log = jasmine.createSpy("log");
        bankapp._checkDepositAmount(1.4);
        expect(console.log).toHaveBeenCalled();
      })

      it("returns an error if amount is less than 1", () => {
        console.log = jasmine.createSpy("log");
        bankapp._checkDepositAmount(-1);
        expect(console.log).toHaveBeenCalled();
      })

      it("returns an error when amont is not a number", () => {
        console.log = jasmine.createSpy("log");
        bankapp._checkDepositAmount("p");
        expect(console.log).toHaveBeenCalled();
      })

    })

    describe("#withdraw", () => {
      it("withdraws the amount from balance", () => {
        bankapp.deposit(100);
        bankapp.withdraw(50);
        expect(bankapp.showBalance()).toEqual(50);
      })

      it("does not withdraw the amount from balance if amount is greater than balance", () => {
        bankapp.deposit(100);
        bankapp.withdraw(500);
        expect(bankapp.showBalance()).toEqual(100);
      })

      it("does not withdraw the amount from balance if amount is not in integer", () => {
        bankapp.deposit(100);
        bankapp.withdraw(10.4);
        expect(bankapp.showBalance()).toEqual(100);
      })

      it("returns an error when amont is not a number", () => {
        bankapp.deposit(100);
        console.log = jasmine.createSpy("log");
        bankapp._checkWithdrawAmount("p");
        expect(console.log).toHaveBeenCalled();
      })

      it("returns an error if amount is less than the balance", () => {
        bankapp.deposit(100);
        console.log = jasmine.createSpy("log");
        bankapp._checkWithdrawAmount(200);
        expect(console.log).toHaveBeenCalled();
      })

      it("returns an error if amount is a flaot", () => {
        bankapp.deposit(100);
        console.log = jasmine.createSpy("log");
        bankapp._checkWithdrawAmount(2.4);
        expect(console.log).toHaveBeenCalled();
      })
    })

    describe("#deposit calls on formatter method", () => {
      it("sends the data over to the formatter", () => {
        spyOn(Formatter.prototype, 'formatDepositTransactions');
        bankapp.deposit(100);
        expect(Formatter.prototype.formatDepositTransactions).toHaveBeenCalled();
      })
    })

    describe("#withdraw calls on formatter method", () => {
      it("sends the data over to the formatter", () => {
        spyOn(Formatter.prototype, 'formatWithdrawTransactions');
        bankapp.deposit(100);
        bankapp.withdraw(50);
        expect(Formatter.prototype.formatWithdrawTransactions).toHaveBeenCalled();
      })
    })

    describe("#printStatement", () => {
      it("returns the statement", () => {
        let today = formatter._formatNewDate();
        bankapp.deposit(100);
        bankapp.withdraw(50);
        expect(bankapp.printStatement()).toEqual([
          ['   Date     ||  Credit   ||  Debit   ||  Balance  '],
          [`${today}  ||          ||  50.00  ||  50.00`],
          [`${today}  ||  100.00  ||          ||  100.00`]
        ]);
      })
    })

  })
