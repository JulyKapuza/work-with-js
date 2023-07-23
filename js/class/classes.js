const tools = {
  years: 15,
  get age() { return 'Age is ' + this.years; },
  set age(value) { this.years = value;}
};
tools.age; // "Age is 15"
tools.age = 25;
tools.age; // "Age is 25"

class User {
  constructor(userName) { 
    this.un = userName; 
  }

  get name() { return 'User name is ' + this.un; }
  set name(value) {this.un = value; }
}
const u1 = new User('Luter');


u1.name;  // "User name is Luter"
u1.name = 'Kolya';
u1.name; // "User name is Kolya"