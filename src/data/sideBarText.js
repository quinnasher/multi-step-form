const sideBarText = [
  {
    number: 1,
    stepF: function() {
      this.step = `Step ${this.number}`;
    },
    formType: "Your Info"
  },
  {
    number: 2,
    stepF: function() {
      this.step = `Step ${this.number}`;
    },
    formType: "Select Plan"
  },
  {
    number: 3,
    stepF: function() {
      this.step = `Step ${this.number}`;
    },
    formType: "Add-ons"
  },
  {
    number: 4,
    stepF: function() {
      this.step = `Step ${this.number}`;
    },
    formType: "Summary"
  }
];

export default sideBarText;