const greaterThanOne = "Amount must an integer greater than 1";
const mustBeANumber = "Amount must be a number";
const mustBeAnInteger = "Amount must be an integer";
const insufficientFunds = "Insuficcient funds";


function ErrorLogger () {

  ErrorLogger.prototype.greaterThanOne = () => {
    console.log(greaterThanOne);
  }

  ErrorLogger.prototype.mustBeANumber = () => {
    console.log(mustBeANumber);
  }

  ErrorLogger.prototype.mustBeAnInteger = () => {
    console.log(mustBeAnInteger);
  }

  ErrorLogger.prototype.insufficientFunds = () => {
    console.log(insufficientFunds);
  }

}
