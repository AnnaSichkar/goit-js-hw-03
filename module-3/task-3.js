const findBestEmployee = function (employees) {
  let bestEmploee;
  let maxSalary = Number.MIN_VALUE;

  for (const key in employees) {
    const currentVal = employees[key];
    if (currentVal > maxSalary) {
      maxSalary = currentVal;
      bestEmploee = key;
    }
  }
  return bestEmploee;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); 

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); 

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); 
