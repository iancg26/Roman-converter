$(document).ready(function() {
  $("form#roman").submit(function(event) {
    event.preventDefault();
    var convertToRoman = function(num) {

  var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  var romanized = '';

  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

    var input = $("#decimal").val();

  return romanized;
  $("#result").text();
// abs(x - 1) > abs(x - 5)
// abs(x - 1) < abs(x - 5)
// abs(x - 1) === abs(x - 5) (3)
// abs(8 - 1) > abs(4 - 5) (9)
