const theBmiChart = require('./back-end.js')
const healthyTips = require('./color-deconstructor.js')

const param1 = getInput(0) 
const param2 = getInput(1)

// const outPut = colorCombinator(param1,param2)


// const color=getInput(0)
// const outPut1= colorDeconstructor(color)


if(param1 === undefined && param2 === undefined){
  return  " please place eighter your height and  weight or bmi range as an input. Make sure to only put your height in inches and your weight in lbs so if you are 5 ft 2in your input should be 62 and if you are 120 lbs your input should be 120. Typing you bmi range for example undrweight, optimal or over weight will give you back a few diet and workout tips "
  // if(param2 === 'undefines'){
  //   return  " Please place in atleast one color"
  // } return  " Please place in atleast one color"
}
else if(param1 !== undefined && param2 === undefined){
  let health = healthyTips
  console.log(health(param1))
}
else if (param1 !== undefined && param2 !== undefined){
  let bmi = theBmiChart
  console.log(bmi(param1,param2))
}






