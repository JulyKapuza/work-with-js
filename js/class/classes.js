const tools = {
  years: 15,
  get age() { return 'Age is ' + this.years; },
  set age(value) { this.years = value;}
};
tools.age; // "Age is 15"
tools.age = 25;
tools.age; // "Age is 25"