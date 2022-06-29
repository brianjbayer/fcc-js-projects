// Design a cash register drawer function checkCashRegister() that
// accepts purchase price as the first argument (price), payment as
// the second argument (cash), and cash-in-drawer (cid) as the
// third argument.
// cid is a 2D array listing available currency.
// The checkCashRegister() function should always return an object
// with a status key and a change key.
// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer
// is less than the change due, or if you cannot return the exact
// change.
// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the
//  value for the key change if it is equal to the change due.
// Otherwise, return {status: "OPEN", change: [...]}, with the change
// due in coins and bills, sorted in highest to lowest order, as the
// value of the change key.
// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]

const CURRENCY = {
  PENNY: 0.01,
  NICKLE: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  DOLLAR: 1.0,
  FIVE: 5.0,
  ONE: 1.0,
  TEN: 10.0,
  TWENTY: 20.0,
  'ONE HUNDRED': 100.0
};
Object.freeze(CURRENCY);

function checkCashRegister (price, cash, cid) {
  const UNIT = 0;
  const TOTAL = 1;
  // ASSUME cash > price
  const changeAmount = cash - price;

  // To deal with JS float precision, use integer addition
  let totalCid = cid.reduce((sum, tuple) => sum + tuple[TOTAL] * 100, 0.0) / 100;

  if (changeAmount > totalCid) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }

  const change = [];
  let changeLeftToMake = changeAmount;
  const cidHiToLo = [...cid].reverse();
  for (const cidTuple of cidHiToLo) {
    const unit = cidTuple[UNIT];
    const unitValue = CURRENCY[unit];
    if (changeLeftToMake >= unitValue && cidTuple[TOTAL] > 0) {
      const unitsInDrawer = cidTuple[TOTAL] / unitValue;
      const unitsNeeded = Math.floor(changeLeftToMake / unitValue);
      const units = (unitsNeeded <= unitsInDrawer) ? unitsNeeded : unitsInDrawer;
      const unitTotal = units * unitValue;
      change.push([unit, unitTotal]);
      // To deal with JS float precision, use integer addition
      changeLeftToMake = Math.round((changeLeftToMake * 100) - (unitTotal * 100)) / 100;
      totalCid = Math.round((totalCid * 100) - (unitTotal * 100)) / 100;
    }
  }

  if (changeLeftToMake > 0) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }

  if (totalCid === 0) {
    return { status: 'CLOSED', change: cid };
  }

  return { status: 'OPEN', change };
}

module.exports = checkCashRegister;
