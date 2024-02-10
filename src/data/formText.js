// // console.log("before import")
//
// import arcadeIcon from "../assets/images/icon-arcade.svg";
// import advancedIcon from "../assets/images/icon-advanced.svg";
// import proIcon from "../assets/images/icon-pro.svg";
//
// // console.log("after import")
//
// export const formText = {
//   personalInfo: {
//     title: "Personal Info",
//     description: "Please provide your name, email address, and phone text.",
//     nameField: {
//       name: "name",
//       namePlaceholder: "stephen king"
//     },
//     emailField: {
//       email: "Email Address",
//       emailPlaceholder: "e.g. stephenking@lorem.com"
//     },
//     phoneField: {
//       phone: "Phone Number",
//       phonePlaceholder: "e.g. +1 234 567 890"
//     }
//   },
//
//
//   selectPlan: {
//     title: "select your plan",
//     description: "You have the option of monthly or yearly billing.",
//     billType: {
//       arcade: {
//         billName: "arcade",
//         billIcon: arcadeIcon,
//         billAmount: 9,
//         billFormat: `$${this.billAmount}/mo`,
//         monthFree: ""
//       }, advanced: {
//         billName: "advanced",
//         billIcon: advancedIcon,
//         billAmount: 12,
//         billFormat: `$${this.billAmount}/mo`,
//         monthFree: ""
//       }, pro: {
//         billName: "pro",
//         billIcon: proIcon,
//         billAmount: 15,
//         billFormat: `$${this.billAmount}/mo`,
//         monthFree: ""
//       }
//     }, billOption: {
//       monthly: "monthly",
//       yearly: "Yearly"
//     }, determineBillAmount: function(option) {
//       option = option.toLowerCase();
//
//       if (option === "yearly" || option === "y") {
//
//         this.billType.arcade.billAmount = 90;
//         this.billType.advanced.billAmount = 120;
//         this.billType.pro.billAmount = 150;
//         this.billType.arcade.monthFree = "2 months free";
//         this.billType.advanced.monthFree = "2 months free";
//         this.billType.pro.monthFree = "2 months free";
//         this.billType.arcade.billFormat = `$${this.billType.arcade.billAmount}/yr`;
//         this.billType.advanced.billFormat = `$${this.billType.advanced.billAmount}/yr`;
//         this.billType.pro.billFormat = `$${this.billType.pro.billAmount}/yr`;
//       }
//     }
//   },
//
//   addOns: {
//     title: "pick add-ons",
//     description: "Add-ons help enhance your gaming experience.",
//
//     addOnType: {
//       onlineService: {
//         addOnName: "Online Service",
//         addOnBenefit: "Access to multiplayer games",
//         addOnAmount: 1,
//         addOnFormat: `+${this.addOnAmount}/mo`
//       },
//       largerStorage: {
//         addOnName: "larger storage",
//         addOnBenefit: "Extra 1TB of cloud save",
//         addOnAmount: 2,
//         addOnFormat: `+${this.addOnAmount}/mo`
//       },
//       customizableProfile: {
//         addOnName: "customizable profile",
//         addOnBenefit: "custom theme on your profile",
//         addOnAmount: 2,
//         addOnFormat: `+${this.addOnAmount}/mo`
//       },
//       determineAddOnAmount: function(option) {
//         option = option.toLowerCase();
//         if (option === "yearly" || option === "y") {
//           this.addOnType.onlineService.addOnAmount = 10;
//           this.addOnType.largerStorage.addOnAmount = 20;
//           this.addOnType.customizableProfile.addOnAmount = 10;
//           this.addOnType.onlineService.addOnFormat = `+${this.addOnType.onlineService.addOnFormat}/year`;
//           this.addOnType.largerStorage.addOnFormat = `+${this.addOnType.largerStorage.addOnFormat}/year`;
//           this.addOnType.customizableProfile.addOnFormat = `+${this.addOnType.customizableProfile.addOnFormat}/year`;
//         }
//       }
//     }
//   },
//
//
//   thankYou: {
//     title: "Thank You!",
//     description: "Thanks for confirming your subscription!\n" +
//       "We hope you have fun using our\n" +
//       "platform. If you ever need support,\n" +
//       "please feel free to email us at\n" +
//       "support@loremgaming.com."
//   }
// };
//
//
// export default formText;