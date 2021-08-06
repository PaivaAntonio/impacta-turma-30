var moment = require("moment");

moment.locale("pt-BR");

const now = moment();

console.log("Essa é a hora: " + now.format("yyyy-MM-DD"));
console.log(now.format("dddd MMMM yyyy-MM-DD"));
console.log(now.isLeapYear());

console.log("============================");
const date = moment.date(1);
console.log(date.format("dddd MMMM yyyy-MM-DD"));