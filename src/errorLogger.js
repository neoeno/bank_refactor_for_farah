function ErrorLogger() {}

ErrorLogger.prototype.greaterThanOne = () => {
  const greaterThanOne = "Amount must an integer greater than 1";
  return greaterThanOne;
}

ErrorLogger.prototype.mustBeANumber = () => {
  const mustBeANumber = "Amount must be a number";
  return mustBeANumber;
}

ErrorLogger.prototype.mustBeAnInteger = () => {
  const mustBeAnInteger = "Amount must be an integer";
  return mustBeAnInteger;
}

ErrorLogger.prototype.insufficientFunds = () => {
  const insufficientFunds = "Insuficcient funds";
  return insufficientFunds;
}
