function distanceFromHqInBlocks(someValue){
    if (someValue > 42)
        return someValue % 42
    else 
        return 42 % someValue
}

function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue) * 264
  }

function distanceTravelledInFeet(start, end){
    return Math.abs((start - end)*264)
}

function calculatesFarePrice(start, destination){
    var difference = distanceTravelledInFeet(start, destination)
    if (difference < 400)
        return 0 
    else if (difference > 400 && difference <2000)
        return (difference - 400) * 0.02
    else if (difference > 2000 && difference < 2500)
        return 25
    else 
        return "cannot travel that far"
}
