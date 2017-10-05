
class Person {

  constructor (name = 'Anonymous', age=0) {
      this.name = name;
      this.age = age;
  }

  getGreeting () {
    return `Hi I am ${this.name}`;
  }

  getDescription () {
    return `I am ${this.age} year(s) old`;
  }

  toString  ()  {
    return JSON.stringify(this);
  }

}

class Child extends Person {

  constructor(name, age, like) {
    super(name, age);
    this.like = like
  }

  getGreeting() {
    return `Hiiiii I am ${this.name}. I am ${this.age} year(s) old. And I like ${this.like}`;
  }

}

class Baby extends Person {

  getGreeting() {
    return `aiiii chuti thathee aii`
  }

}

var me = new Person('Danuka', 25);
console.log(me.getDescription());

var anonymous = new Person();
console.log (anonymous.getDescription());

var child = new Child('danisha', 4, 'cars');
console.log (child.getGreeting());

var baby = new Baby('navija');
console.log(baby.getGreeting());
