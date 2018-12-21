/* global describe, beforeEach, it, expect, formatter:true, Formatter */

describe('Formatter functions', () => {
  beforeEach(() => {
    formatter = new Formatter()
  })

  describe('#_formatDepositTransaction', () => {
    it('formats deposit transactions correctly as they should appear on the screen', () => {
      let todaysDate = formatter._formatNewDate()
      expect(formatter._formatDepositTransaction('3.00', '4.00')).toEqual([`${todaysDate}`, '3.00', '      ', '4.00'])
    })
  })

  describe('#_formatWithdrawTransaction', () => {
    it('formats deposit transactions correctly as they should appear on the screen', () => {
      let todaysDate = formatter._formatNewDate()
      expect(formatter._formatWithdrawTransaction('3.00', '4.00')).toEqual([`${todaysDate}`, '      ', '3.00', '4.00'])
    })
  })

  describe('#_newTransaction', () => {
    it('adds new transactions to a holding array', () => {
      formatter._newTransaction(['21/12/2018  ||  70.00  ||          ||  70.00'])
      expect(formatter._transactionsHolder).toEqual([['21/12/2018  ||  70.00  ||          ||  70.00']])
    })
  })

  describe('#_sendRecordedTransactions', () => {
    it('returns the held transaction to statement', () => {
      formatter._newTransaction(['21/12/2018  ||  70.00  ||          ||  70.00'])
      expect(formatter._transactionsHolder.length).toEqual(1)
      formatter._sendRecordedTransaction()
      expect(formatter._transactionsHolder.length).toEqual(0)
    })
  })

  describe('#_amountToDecimal', () => {
    it('changes the int to a float', () => {
      expect(formatter._amountToDecimal(4)).toEqual('4.00')
    })
  })

  describe('#_formatNewDate', () => {
    it('formats the date as per the requierments', () => {
      let date = new Date()
      let month = date.getMonth() + 1
      let day = date.getDate()
      if (day < 10) {
        day = '0' + date.getDate()
      }
      if (month < 10) {
        month = '0' + month
      }
      date = date.getDate() + '/' + month + '/' + date.getFullYear()
      expect(formatter._formatNewDate()).toEqual(date)
    })
  })
})
