const addOnText = {
  title: "pick add-ons",
  description: "Add-ons help enhance your gaming experience.",

  addOnType: {
    onlineService: {
      addOnName: "Online Service",
      addOnBenefit: "Access to multiplayer games",
      addOnAmount: 1,
      addOnFormat: function() {

        return `+${this.addOnAmount}/mo`;
      }
    },
    largerStorage: {
      addOnName: "larger storage",
      addOnBenefit: "Extra 1TB of cloud save",
      addOnAmount: 2,
      addOnFormat: function() {

        return `+${this.addOnAmount}/mo`;
      }
    },
    customizableProfile: {
      addOnName: "customizable profile",
      addOnBenefit: "custom theme on your profile",
      addOnAmount: 2,
      addOnFormat: function() {

        return `${this.addOnAmount}/mo`;
      }
    },
    determineAddOnAmount: function(option) {
      option = option.toLowerCase();
      if (option === "yearly" || option === "y") {
        this.addOnType.onlineService.addOnAmount = 10;
        this.addOnType.largerStorage.addOnAmount = 20;
        this.addOnType.customizableProfile.addOnAmount = 10;
        this.addOnType.onlineService.addOnFormat = () => `+${this.addOnType.onlineService.addOnFormat}/year`;
        this.addOnType.largerStorage.addOnFormat = () => `+${this.addOnType.largerStorage.addOnFormat}/year`;
        this.addOnType.customizableProfile.addOnFormat = () => `+${this.addOnType.customizableProfile.addOnFormat}/year`;
      }
    }
  }
};

export default addOnText;