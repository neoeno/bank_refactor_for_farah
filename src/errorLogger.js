const greaterThanOne = "Amount must an integer greater than 1";
const mustBeANumber = "Amount must be a number";
const mustBeAnInteger = "Amount must be an integer";
const insufficientFunds = "Insuficcient funds";


function ErrorLogger () {

  ErrorLogger.prototype.greaterThanOne = () => {
    return greaterThanOne;
  }

  ErrorLogger.prototype.mustBeANumber = () => {
    return mustBeANumber;
  }

  ErrorLogger.prototype.mustBeAnInteger = () => {
    return mustBeAnInteger;
  }

  ErrorLogger.prototype.insufficientFunds = () => {
    return insufficientFunds;
  }

}
