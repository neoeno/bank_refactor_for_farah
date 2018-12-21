describe("Formatter functions", () => {


  beforeEach(() => {
    formatter = new Formatter();
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
      date = date.getDate() + '/' + month + '/' + date.getFullYear();
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

  describe('#_HeldTransactions', () => {
    xit('returns the held transaction', () => {

    })
  })

  describe('#_newTransaction', () => {
    xit('adds new transactions to a holding array', () => {

    })
  })
})
