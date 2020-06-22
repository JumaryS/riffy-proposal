function healthyTips(tipsPerBmi){
    if (tipsPerBmi === "severley underweight" || tipsPerBmi === "underweight"){
        return "severley underweight or underweight? Not a problem, Do not skip meals instead try eating 5-6 small meals a day rather than 2 or three large meals to help boost your hunger. As part of an overall healthy diet, choose whole-grain breads, fruits and vegetables, dairy or non dairy products, lean protein sources (or meatless meat options), and nuts and seeds. Remember to do a bit of strength training exercises like squats, push ups, lifting weights to help build muscles  "
    }
    else if(tipsPerBmi === "optimal"){
    return "wake up and get moving! a 5-10 minute stretch can help decrease stress. Maintain your weight with a good eating habit routine that can fit best with your lifestyle.   "
    }
    
    else if( tipsPerBmi === "overweight" || tipsPerBmi === "obese" ){
    return  "Drink lots of water and get 30 minutes of aerobic exercise 3-5 times per week. Balance your calorie intake with your workouts. Cut down unhealthy snacks and replace them with fruits, nuts and seeds or a protien bar.Set small and manageable goals for weight loss. "
    }
    else if( tipsPerBmi === "severley obese" ){
            return "" }

    else{
        return 'undefined'
    }

    }


    module.exports = healthyTips

function getInput(i) {
    return process.argv[i + 2];
}