module.exports = function getZerosCount(number, base) {
  var b = base;
  var counter = 0;
  var arr = [];

  for (var i = 2; i <= b ; i++) {
    if (b % i === 0) {
      for (var j = 2; j <= i; j++) {
        if (i % j == 0) {
          counter++;
        }
      }

      if (counter === 1) {
        arr.push(i);
        b = b / i;
        i--;
      }
    }

    counter = 0;
  }

  var result = 0;
  var i = 1;

  while (Math.pow(arr[arr.length - 1], i) < number) {
      result = result + Math.floor(number / Math.pow(arr[arr.length - 1], i));
      i++;
  }

  return result;

}
