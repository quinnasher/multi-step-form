import selectPlan from "./selectPlan.js";

function determineBillAmount(isYearly) {
  const { arcade, advanced, pro } = selectPlan.billType;
  if (isYearly) {
    arcade.billAmount = 90;
    advanced.billAmount = 120;
    pro.billAmount = 150;
    arcade.monthFree = "2 months free";
    advanced.monthFree = "2 months free";
    pro.monthFree = "2 months free";
    arcade.billFormat = function() {
      return `$${arcade.billAmount}/yr`;
    };
    advanced.billFormat = function() {
      return `$${advanced.billAmount}/yr`;
    };
    pro.billFormat = function() {
      return `$${pro.billAmount}/yr`;
    };
  } else {
    arcade.billAmount = 9;
    advanced.billAmount = 12;
    pro.billAmount = 15;
    arcade.monthFree = "";
    advanced.monthFree = "";
    pro.monthFree = "";
    arcade.billFormat = function() {
      return `$${arcade.billAmount}/mo`;
    };
    advanced.billFormat = function() {
      return `$${advanced.billAmount}/mo`;
    };
    pro.billFormat = function() {
      return `$${pro.billAmount}/mo`;
    };
  }
}

export default determineBillAmount;