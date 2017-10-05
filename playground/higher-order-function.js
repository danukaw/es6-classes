function one (name, place) {
  console.log(name, place);
}

function two () {
  console.log('Augs', arguments);
  one.apply(undefined, arguments)
}

two('Danuka', 'Monaragala');
two.apply(undefined, ['danuka', 'Battaramull Koswaththa']);

var add = (a , b) => a + b;

var squre = (a) => a * a;

var callAndLog = (func) => {
  return function () {
    var res = func.apply(undefined, arguments);
    console.log('result is ' +  res);
    return res;
  }
}

var addLog  = callAndLog(add);
var squreLog = callAndLog(squre);

console.log(addLog(10, -1));
console.log("=======================================");
console.log(squreLog(10));
