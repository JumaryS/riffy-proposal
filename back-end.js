
// Note to self Create two back ends one for BMI and the other for Suggestions!



// Also make sure not to over do it. Time each one.
// You can group the BMIs for ex instead of your BMI 
//is 30 you can say your BMI is in this range

// That way its easier to group

// calculate BMI so potentail calculator 
// have a seperate file for the BMI function that calculates the BMI give the val to the BMI chart



function theBmiChart(height, weight){
    let bmiCalculation = 703 * weight / (height**2) ;
    console.log(bmiCalculation)
    if (bmiCalculation >= 12 && bmiCalculation <= 16){
        return "Your bmi is in the severly undrweight range. Make sure to type your bmi range in the terminal to get some diet and exercise tips!! "
    }
    else if (bmiCalculation >= 17 && bmiCalculation <= 18){
        return "Your bmi is in the undrweight range. Make sure to type your bmi range in the terminal to get some diet and exercise tips!!"
    }
    else if (bmiCalculation >= 19 && bmiCalculation<= 24){
        return "Your bmi is in the optimal range. Make sure to type your bmi range in the terminal to get some diet and exercise tips!!"
    }
    else if (bmiCalculation >= 25 && bmiCalculation <= 29){
        return "Your bmi is in the overweight range. Make sure to type your bmi range in the terminal to get some diet and exercise tips!!"
    }
    else if(bmiCalculation >= 30 && bmiCalculation <= 39){
        return "Your bmi is in the obese range. Make sure to type your bmi range in the terminal to get some diet and exercise tips!!"
    }
    else {
        return "Your bmi is in the severly obese range. Make sure to type your bmi range in the terminal to get some diet and exercise tips!!"
    }
    
} 
console.log(theBmiChart(62, 200))




    


module.exports = theBmiChart

function getInput(i) {
    return process.argv[i + 2];
}