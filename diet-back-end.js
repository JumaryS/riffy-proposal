function healthyTips(diet){
    if (diet === "severley underweight" && diet === "underweight"){
        return "severley underweight or underweight? Not a problem, Do not skip meals instead try eating 5-6 small meals a day rather than 2 or three large meals to help boost your hunger. As part of an overall healthy diet, choose whole-grain breads, fruits and vegetables, dairy or non dairy products, lean protein sources (or meatless meat options), and nuts and seeds. Remember to do a bit of strength training exercises like squats, push ups, lifting weights to help build muscles  "
    }
    else if(diet === "optimal"){
    return "wake up and get moving! a 5-10 minute stretch can help decrease stress. Do not skip meals  "
    }
    
    else if( diet === "overweight" ){
    return  ""
    }
    
    else if( diet === "obese" ){
        return  }

    else if( diet === "severley obese" ){
            return "" }

    else{
        return 'undefined'
    }

    }


    module.exports = healthyTips

function getInput(i) {
    return process.argv[i + 2];
}