import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";

const selectPlan = {
  title: "select your plan",
  description: "You have the option of monthly or yearly billing.",
  billType: {
    arcade: {
      billName: "arcade",
      billIcon: arcadeIcon,
      billAmount: 9,
      billFormat: function() {
        return `$${this.billAmount}/mo`; // Use a regular function expression
      },
      monthFree: ""
    },
    advanced: {
      billName: "advanced",
      billIcon: advancedIcon,
      billAmount: 12,
      billFormat: function() {
        return `$${this.billAmount}/mo`; // Use a regular function expression
      },
      monthFree: ""
    },
    pro: {
      billName: "pro",
      billIcon: proIcon,
      billAmount: 15,
      billFormat: function() {
        return `$${this.billAmount}/mo`; // Use a regular function expression
      },
      monthFree: ""
    }
  },
  billOption: {
    monthly: "monthly",
    yearly: "Yearly"
  },
  determineBillAmount: function(option) {
    option = option.toLowerCase();
    if (option === "yearly" || option === "y") {
      this.billType.arcade.billAmount = 90;
      this.billType.advanced.billAmount = 120;
      this.billType.pro.billAmount = 150;
      this.billType.arcade.monthFree = "2 months free";
      this.billType.advanced.monthFree = "2 months free";
      this.billType.pro.monthFree = "2 months free";
      this.billType.arcade.billFormat = () => `$${this.billType.arcade.billAmount}/yr`;
      this.billType.advanced.billFormat = () => `$${this.billType.advanced.billAmount}/yr`;
      this.billType.pro.billFormat = () => `$${this.billType.pro.billAmount}/yr`;
    }
  }
};

export default selectPlan;