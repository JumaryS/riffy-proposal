const theBmiChart = require('./back-end.js')
const healthyTips = require('./diet-back-end.js')

const param1 = getInput(0) 
const param2 = getInput(1)

function getInput(i) {
    return process.argv[i + 2];
}


if(param1 === undefined && param2 === undefined){
return  " Please place an input or inputs to get started "

}
else if(param1 !== undefined && param2 === undefined){

console.log(healthyTips(param1))
}
else if (param1 !== undefined && param2 !== undefined){
let bmi = theBmiChart 

console.log(bmi(param1,param2))
}






