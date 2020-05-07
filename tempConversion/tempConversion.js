const ftoc = function(number) {
// [°C] = ([°F] − 32) × ​5⁄9
return Number(((number - 32) * (5/9)).toFixed(1))
}

const ctof = function(number) {
// [°F] = [°C] × ​9⁄5 + 32	
return Number(((number * 9 / 5) + 32).toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
