export const calculateAmount = (items) => {
  console.log(items);
  /* const tot = items.reduce((acc, val) => {
    return parseFloat(val.amount) + acc;
  }, 0);*/

  let tot = 0;
  for (let { amount } of items.values()) {
    tot += parseFloat(amount);
  }

  return tot;
};

export const calculatePrice = (items) => {
  console.log(items);

  /* const tot = items.reduce((acc, val) => {
    const tott = Number(
      (parseFloat(val.price) * Number(val.amount) + acc).toFixed(2)
    );
    return tott;
  }, 0);*/
  let tot = 0;
  for (let { price, amount } of items.values()) {
    tot += parseFloat(price) * Number(amount);
  }
  return Number(tot.toFixed(2));
};
