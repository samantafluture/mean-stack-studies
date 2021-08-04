var moment = require("moment");

moment.locale("pt-BR");

const now = moment();
console.log(now);

console.log(now.format("dd - DD/MM/yyyy"));
