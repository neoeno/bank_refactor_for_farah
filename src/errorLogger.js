function ErrorLogger () {}

ErrorLogger.prototype.returnLessThanOne = function () {
  return this._lessThanOne();
};

ErrorLogger.prototype.returnNotANumber = function () {
  return this._notANumber();
};

ErrorLogger.prototype.returnNotAnInteger = function () {
  return this._notAnInteger();
};

ErrorLogger.prototype.returnInsufficientFunds = function () {
  return this._insufficientFunds();
};

ErrorLogger.prototype._lessThanOne = () => {
  const greaterThanOne = 'Amount must an integer greater than 1';
  return greaterThanOne;
};

ErrorLogger.prototype._notANumber = () => {
  const mustBeANumber = 'Amount must be a number';
  return mustBeANumber;
};

ErrorLogger.prototype._notAnInteger = () => {
  const mustBeAnInteger = 'Amount must be an integer';
  return mustBeAnInteger;
};

ErrorLogger.prototype._insufficientFunds = () => {
  const insufficientFunds = 'Insuficcient funds';
  return insufficientFunds;
};
