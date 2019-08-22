var roNum = function(numeral){
  if(numeral === 1){
    return "I";
  }else if(numeral === 2)
      return "II";
  }else if(numeral === 3)
      return "III";












$(document).ready(function() {
  $("#converter").submit(function(event){
  event.preventDefault();
  var numeral= parseInt($("#number").val());
  var result =  roNum(numeral);
  $("#result").text(result);
  });
});
