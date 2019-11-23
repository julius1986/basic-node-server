let convertToIntegerNumber = function(value) {
  let result = Number(value);
  if (!Number.isInteger(result)) {
    result = false;
  }
  return result;
};

module.exports = {
  convertToIntegerNumber
};
