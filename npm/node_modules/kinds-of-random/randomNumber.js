function randomInt (min, max) {
  if(typeof max !== 'number' || typeof min !== 'number') {
    console.error('max and min must be number');    
    return;
  }
  var value = parseInt(Math.random() * (max - min + 1) + min, 10);
  return value; 
}

exports.randomInt = randomInt;