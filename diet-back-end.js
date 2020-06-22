function healthyTips(diet){
    if (diet === "severley underweight" && diet === "underweight"){
        return "severley underweight or underweight? Not a problem, eating 5-6 small meals a day rather than 2 or three large meals can help boost your hunger. As part of an overall healthy diet, choose whole-grain breads, pastas and cereals; fruits and vegetables, dairy products, lean protein sources, and nuts and seeds. Remember to do a bit of strength training exercises like squats, push ups, lifting weights to help build muscles  "
    }
    else if(diet === "optimal"){
    return "Getting a good 5-10 minute workout and a healthy breakfast first thing in the morning is important and can help you maintain hunger  "
    }
    
    else if( diet === "overweight" ){
    return  ""
    }
    
    else if( diet === "obese" ){
        return  }

    else if( diet === "severley obese" ){
            return "Contact a specialist if you are suffereing from illnesses or take medication for your weight. Cutting fast food and sugary drinks can help you lose a bit of weight" }

    else{
        return 'undefined'
    }

    }


    module.exports = healthyTips

function getInput(i) {
    return process.argv[i + 2];
}