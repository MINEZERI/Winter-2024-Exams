// Copy only listed values from dict
// rename variables


only = (object, ...copy) => {
  Object.keys(object).forEach((key) => {
    if (!copy.includes(key)) {
      delete object[key];
    }
  });
  return object;
};

module.exports = only;
