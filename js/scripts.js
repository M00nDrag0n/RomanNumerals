var roNum = function(numeral){
  if(numeral === 1){
    return "I";
  }else if(numeral === 2)
      return "II";
  }else if(numeral === 3)
      return "III";
  }else if(numeral === 4)
      return "IV";
  }else if(numeral === 5)
      return "V";
  }else if(numeral === 6)
      return "VI";
  }else if(numeral === 7)
      return "VII";
  }else if(numeral === 8)
      return "VIII";
  }else if(numeral === 9)
        return "VIV";
  }else if(numeral === 10)
        return "X";
    else return "Sorry, this only goes up to 10."}
  }}}}}}












$(document).ready(function() {
  $("#converter").submit(function(event){
  event.preventDefault();
  var numeral= parseInt($("#number").val());
  var result =  roNum(numeral);
  $("#result").text(result);
  });
});
