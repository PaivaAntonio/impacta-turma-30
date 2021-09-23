var moment = require('moment');
moment.locale('pt-BR');

const now = moment();
console.log(now);

console.log(now.format("dd"));
console.log(now.format("ddd"));
console.log(now.format("MMMM"));
console.log(now.format("DD/MM/yyyy"));
console.log(now.format("ddd - DD/MM/yyyy"));