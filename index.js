// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  if (block < 42) {
    let n = 0;
    while (block < 42) {
      n += 1;
      block++;
    }
    return n;
  } else {
    return block - 42;
  }
}
function distanceFromHqInFeet(block) {
  return 264 * distanceFromHqInBlocks(block);
}
function distanceTravelledInFeet(start, finish) {
  if (finish < start) {
    let n = 0;
    while (finish < start) {
      n += 1;
      finish++;
    }
    return 264 * n;
  } else {
    let n = finish - start;
    return 264 * n;
  }
}
function calculatesFarePrice(start, finish) {
  let n = distanceTravelledInFeet(start, finish);
  if (n <= 400) {
    return 0;
  } else if (n > 400 && n <= 2000) {
    return ((n - 400) * 2) / 100;
  } else if (n > 2000 && n <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
