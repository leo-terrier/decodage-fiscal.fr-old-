let obj = {
  IR: 421,
  IS: 13275,
  charges: 4000,
  cotisations: 12653,
  dividende: 38551,
  flatTax: 16522,
  remuneration: 14579,
};
let sum = 0
for (key in obj) {
  sum += obj[key]
}
console.log()