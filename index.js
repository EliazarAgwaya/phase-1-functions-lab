// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    if(distance>42){
        return distance-42;
    }else{
        return 42-distance;
    }
}
distanceFromHqInBlocks();

function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance)*264;
}
distanceFromHqInFeet()

function distanceTravelledInFeet (start, end) {
    if (start < end) {
      return (end - start) * 264;
    } else {
      return (start - end) * 264;
    }
  }
  distanceTravelledInFeet();

  function calculatesFarePrice (start, end) {
    const distance = distanceTravelledInFeet(start, end);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400)*0.02;
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }

  