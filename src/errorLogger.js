function ErrorLogger () {}

ErrorLogger.prototype._greaterThanOne = () => {
  const greaterThanOne = 'Amount must an integer greater than 1'
  return greaterThanOne
}

ErrorLogger.prototype._mustBeANumber = () => {
  const mustBeANumber = 'Amount must be a number'
  return mustBeANumber
}

ErrorLogger.prototype._mustBeAnInteger = () => {
  const mustBeAnInteger = 'Amount must be an integer'
  return mustBeAnInteger
}

ErrorLogger.prototype._insufficientFunds = () => {
  const insufficientFunds = 'Insuficcient funds'
  return insufficientFunds
}
