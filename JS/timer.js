function startCountdown(duration, display){
  var timer = duration, seconds;
  setInterval(function (){
    seconds = parseInt(timer % 120, 10);

    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = seconds;

    if(--timer < 0){
      timer = duration;
      alert("시간 초과! 이어서 주문하시겠습니까?");
    }
  }, 1000);
}

window.onload = function () {
  var duration = 120;
  var display = document.querySelector('#timer');
  startCountdown(duration, display);
}