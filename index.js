// Code your solution in this file!
function distanceFromHqInBlocks(block){
    return block > 42 ? block - 42 : 42 - block;
}

function distanceFromHqInFeet(NumBlock){
    return distanceFromHqInBlocks(NumBlock) * 264;
}

function distanceTravelledInFeet (startBlock, endBlock){
    return startBlock > endBlock ?
        (startBlock - endBlock) * 264 : (endBlock - startBlock) * 264
}

function calculatesFarePrice (startBlock, endBlock){
    const numFeet = distanceTravelledInFeet(startBlock, endBlock)
    if (numFeet <= 400) {
        return 0;
      } else if (numFeet > 400 && numFeet <= 2000) {
        return 0.02 * (numFeet - 400);
      } else if (numFeet > 2000 && numFeet < 2500) {
        return 25;
      } else {
        return 'cannot travel that far';
    }
}
