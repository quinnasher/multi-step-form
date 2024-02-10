import formText from "./formText.js";

export const finishingText = {
  title: "finishing up",
  description: "Double-check everything looks OK before confirming",
  formType: {
    billName: formText.selectPlan.billType.arcade.billName,
    billAmount: formText.selectPlan.billType.arcade.billAmount,
    action: "change"
  }
};

export default finishingText;