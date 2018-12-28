function ErrorLogger () {}

ErrorLogger.prototype.lessThanOne = function () {
  return this._lessThanOne();
};

ErrorLogger.prototype.notANumber = function () {
  return this._notANumber();
};

ErrorLogger.prototype.notAnInteger = function () {
  return this._notAnInteger();
};

ErrorLogger.prototype.insufficientFunds = function () {
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
