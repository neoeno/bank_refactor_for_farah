describe('Formatter functions', () => {
  beforeEach(() => {
    formatter = new Formatter();
  });

  describe('#_sendFormattedTransaction', () => {
    it('returns the formatted deposit transaction to statement', () => {
      formatter._formatDepositTransactions(40, 80);
      expect(formatter._transactionsHolder.length).toEqual(1);
      formatter._sendFormattedTransaction();
      expect(formatter._transactionsHolder.length).toEqual(0);
    });
  });

  describe('#_sendFormattedTransaction', () => {
    it('returns the formatted withdraw transaction to statement', () => {
      formatter._formatWithdrawTransactions(40, 80);
      expect(formatter._transactionsHolder.length).toEqual(1);
      formatter._sendFormattedTransaction();
      expect(formatter._transactionsHolder.length).toEqual(0);
    });
  });

  describe('#_amountToDecimal', () => {
    it('changes the number to a float', () => {
      expect(formatter._amountToDecimal(4)).toEqual('4.00');
    });
  });

  describe('#_formatDate', () => {
    it('formats the date as per the requierments', () => {
      let date = new Date();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      let year = date.getFullYear();
      if (day < 10)(day = '0' + day);
      if (month < 10)(month = '0' + month);
      date = (day + '/' + month + '/' + year);
      expect(formatter._formatDate()).toEqual(date);
    });
  });
});
