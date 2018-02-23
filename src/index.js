module.exports = function getZerosCount(number, base) {
  var b = base;
  var counter = 0;
  var arrOfSimpMults = [];
  var arrOfMultsOfMults = [];

  for (var i = 2; i <= b ; i++) {
    if (b % i === 0) {
      for (var j = 2; j <= i; j++) {
        if (i % j == 0) {
          counter++;
        }
      }

      if (counter === 1) {
        arrOfSimpMults.push(i);
        b = b / i;
        i--;
      }
    }

    counter = 0;
  }

  var counterOfSimpMults = 1;
  var numsOfSimpMults = [];
  for (var j = 0; j < arrOfSimpMults.length; j++) {
    if (arrOfSimpMults[j] !== arrOfSimpMults[j - 1] || j === 0) {
      if (j !== 0) {
        numsOfSimpMults.push(counterOfSimpMults);
        counterOfSimpMults = 1;
      }
      var result = 0;
      var i = 1;
      while (Math.pow(arrOfSimpMults[j], i) < number) {
        result = result + Math.floor(number / Math.pow(arrOfSimpMults[j], i));
        i++;
      }
      arrOfMultsOfMults.push(result);
    } else {
      counterOfSimpMults++;
    }
  }
  numsOfSimpMults.push(counterOfSimpMults);

  var arrOfResults = [];

  for (var k = 0; k < numsOfSimpMults.length; k++) {
    arrOfResults.push(Math.floor(arrOfMultsOfMults[k] / numsOfSimpMults[k]));
  }

  arrOfResults.sort(function(a, b) {
    return a - b;
  })

  return arrOfResults[0];
}
