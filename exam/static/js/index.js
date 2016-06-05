(function(){
  var input = document.getElementById("bank-card");
  input.onchange = function () {
    console.log(3);
  }
  input.onfocus = function () {
    console.log(1);
  }
  input.onblur = function () {
    console.log(2);
  }
})();
