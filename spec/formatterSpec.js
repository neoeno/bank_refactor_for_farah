describe("Formatter functions", () => {


  beforeEach(() => {
    formatter = new Formatter();
  })

  describe("#formatDepositTransactions", () => {
    it("calls on the private _formatDepositTransaction method", () => {
      spyOn(formatter, "_formatDepositTransaction");
      formatter.formatDepositTransactions(3, 3);
      expect(formatter._formatDepositTransaction).toHaveBeenCalled();
    })
  })


  describe("#formatWithdrawTransactions", () => {
    it("calls on the private _formatWithdrawTransaction method", () => {
      spyOn(formatter, "_formatWithdrawTransaction");
      formatter.formatWithdrawTransactions(6, 6);
      expect(formatter._formatWithdrawTransaction).toHaveBeenCalled();
    })
  })

  describe("#_formatNewDate", () => {
    it("formats the date as per the requierments", () => {
      let date = new Date()
      let month = date.getMonth() + 1
      if (date.getDate() < 10) {
        date.getDate() = '0' + date.getDate()
      }
      if (month < 10) {
        month = '0' + month
      }
      date = date.getDate() + '/' + month + '/' + date.getFullYear()
      expect(formatter._formatNewDate()).toEqual(date);
    })

  })

  describe("#_amountToDecimal", () => {
    it("changes the int to a float", () => {
      expect(formatter._amountToDecimal(4)).toEqual('4.00')
    })
  })

  describe("#_formatDepositTransaction", () => {
    it("formats deposit transactions correctly as they should appear on the screen", () => {
      let todaysDate = formatter._formatNewDate();
      expect(formatter._formatDepositTransaction('3.00', '4.00')).toEqual([`${todaysDate}`, '3.00', '      ', '4.00']);
    })
  })

  describe("#_formatWithdrawTransaction", () => {
    it("formats deposit transactions correctly as they should appear on the screen", () => {
      let todaysDate = formatter._formatNewDate();
      expect(formatter._formatWithdrawTransaction('3.00', '4.00')).toEqual([`${todaysDate}`, '      ', '3.00', '4.00']);
    })
  })

})
