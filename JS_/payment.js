document.addEventListener("DOMContentLoaded", function() {
  var button = document.getElementById("delect-message");
  button.addEventListener("click", function() {
      var confirmDelete = confirm("전체 삭제하시겠습니까?");
      if (confirmDelete) {
          console.log("삭제됨");
      } else {
          console.log("삭제 취소됨");
      }
  });
});

document.addEventListener("DOMContentLoaded", function(){
var button = document.getElementById("pay-message");
button.addEventListener("click",function(){
  var confirmDelete = confirm("결제하시겠습니까?");
if(confirmDelete){
  console.log("결제함");
}
else{
  console.log("결제 안함");
}
});

});