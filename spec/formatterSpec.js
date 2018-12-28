describe('Formatter functions', () => {
  beforeEach(() => {
    formatter = new Formatter();
  });

  describe('#formatDepositTransactions', () => {
    it('formats the deposit transactions as per the requierments', () => {
      formatter.formatDepositTransactions(44, 44);
      let today = formatter._formatDate();
      expect(formatter._transactionsHolder).toEqual([`${today}  ||  44.00  ||          ||  44.00`]);
    });
  });

  describe('#formatWithdrawTransactions', () => {
    it('formats the withdraw transactions as per the requierments', () => {
      formatter.formatWithdrawTransactions(44, 44);
      let today = formatter._formatDate();
      expect(formatter._transactionsHolder).toEqual([`${today}  ||          ||  44.00  ||  44.00`]);
    });
  });

  describe('#sendFormattedTransaction', () => {
    it('returns the formatted deposit transaction to statement', () => {
      formatter.formatDepositTransactions(40, 80);
      expect(formatter._transactionsHolder.length).toEqual(1);
      formatter.sendFormattedTransaction();
      expect(formatter._transactionsHolder.length).toEqual(0);
    });

    it('returns the formatted withdraw transaction to statement', () => {
      formatter.formatWithdrawTransactions(40, 80);
      expect(formatter._transactionsHolder.length).toEqual(1);
      formatter.sendFormattedTransaction();
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
