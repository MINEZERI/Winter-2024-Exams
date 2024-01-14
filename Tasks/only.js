// Copy only listed values from dict
// upgrading if statement

only = (W, ...only) => {
  Object.keys(W).forEach((Z) => {
    if (!only.includes(Z)) {
      delete W[Z];
    } 
  });
  return W;
};

module.exports = only;
