/* global describe, beforeEach, it, expect, statement:true, Statement, formatter: true, Formatter */
describe('Statement functinos', () => {
  beforeEach(() => {
    statement = new Statement()
    formatter = new Formatter()
  })

  describe('#_depositReceived', () => {
    it('adds the deposit transaction to the statement', () => {
      expect(statement._statementArr.length).toEqual(1)
      statement._depositReceived(50, 100)
      statement._depositReceived(50, 150)
      expect(statement._statementArr.length).toEqual(3)
    })
  })

  describe('#_withdrawReceived', () => {
    it('adds the withdraw transaction to the statement', () => {
      statement._withdrawReceived(50, 50)
      expect(statement._statementArr.length).toEqual(2)
    })
  })

  describe('#_returnStatement', () => {
    it('returns the array of transactions with the header', () => {
      statement._depositReceived(50, 100)
      statement._withdrawReceived(50, 50)
      let today = formatter._formatDate()
      expect(statement._returnStatement()).toEqual([
        ['   Date     ||  Credit   ||  Debit   ||  Balance  '],
        [`${today}  ||          ||  50.00  ||  50.00`],
        [`${today}  ||  50.00  ||          ||  100.00`]
      ])
    })
  })
})
