var sum = function(numOne, numTwo) {
  return numOne + numTwo;
};

var multiply = function(numOne, numTwo) {
  return numOne * numTwo;
};

var addCallBacks = function(functionOne, functionTwo) {
  return functionOne(6, 2) + functionTwo(6, 3);
};

// What does this return?
console.log(addCallBacks(multiply, sum));
