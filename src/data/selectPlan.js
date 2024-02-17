import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";
import determineBillAmount from "../data/determineBillAmount.js";


const selectPlan = {
  title: "select your plan",
  description: "You have the option of monthly or yearly billing.",
  billType: {
    arcade: {
      billName: "arcade",
      billIcon: arcadeIcon,
      billAmount: 9,
      billFormat: function() {
        return `$${this.billAmount}/mo`;
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
  determineBillAmount

};

export default selectPlan;