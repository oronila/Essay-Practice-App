var timerChangeBool = true;

function valueChange(){
    document.getElementById('countdown').innerHTML = 00 + ":" + 15;
}

var runonce = true;
function starttimer() {
    if(runonce==true){
      timer();
      runonce = false;
    }    
}
function timer() {
  if(timerChangeBool == true){
      valueChange();
      timerChangeBool = false;
  }
  document.getElementById('essay').removeAttribute("onclick");
  var time = document.getElementById('countdown').innerHTML;
  var timeArr = time.split(/[:]+/);
  var mins = timeArr[0];
  var secs = seconds((timeArr[1] - 1));

  if(secs == 59){mins = mins - 1}
  if(mins <= 1){
      //red color text
  }

  if(mins < 0){
    document.getElementById('essay').readOnly = true;
    return
  }

  document.getElementById('countdown').innerHTML = mins + ":" + secs;
  setTimeout(timer, 1000);
  
}

function seconds(second) {
  if (second < 10 && second >= 0) {second = "0" + second};
  if (second < 0) {second = "59"};

  return second;
}


