const theBmiChart = require('./back-end.js')
const healthyTips = require('./diet-back-end.js')

const param1 = getInput(0) 
const param2 = getInput(1)
console.log(param1)
function getInput(i) {
    return process.argv[i + 2];
}


if(param1 === undefined && param2 === undefined){
return  " please place either your height and weight or bmi range as an input. Make sure to only put your height in inches and your weight in lbs so if you are 5 ft 2in your input should be 62 and if you are 120 lbs your input should be 120. Typing you bmi range for example undrweight, optimal or over weight will give you back a few diet and workout tips "

}
else if(param1 !== undefined && param2 === undefined){

console.log(healthyTips(param1))
}
else if (param1 !== undefined && param2 !== undefined){
let bmi = theBmiChart
console.log(bmi(param1,param2))
}






