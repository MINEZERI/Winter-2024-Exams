// Copy only listed values from dict
// remove unnecessary variable


only = (W, ...only) => {
  Object.keys(W).forEach((Z) => {
    if (only.includes(Z)) {
    } else {
      delete W[Z];
    }
  });
  return W;
};

module.exports = only;
