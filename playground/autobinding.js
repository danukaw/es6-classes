var obj = {
  name : 'danuka',
  printName : function () {
    console.log(`My name is ${this.name}.`);
  }
};

/*function printName2  () {
  return 'My name is anonymous';
}*/

obj.printName();

setTimeout(() => {obj.printName()}, 2000);
