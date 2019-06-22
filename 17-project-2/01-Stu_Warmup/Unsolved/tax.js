var calculateTax = function(price) {
  // Fill in code here
  if(typeof price !== 'number') {
    throw new Error("param 'price' must be a number");
  }
  return Number((price * 1.08).toFixed(2));
};

module.exports = calculateTax;
