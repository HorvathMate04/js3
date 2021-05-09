function asd(){
   var y = parseInt(document.getElementById("input1").value);
var z = parseInt(document.getElementById("input2").value);
if (z > 1) {
    alert  ("Az aranycikeszt csak egyszer lehet elkapni");
    document.getElementById("input2").value = 1;
    z = 1
  }
  if (z <0) {
    alert  ("Az érték nem lehet negatív");
    document.getElementById("input2").value = 0;
    z = 0
  }
  if (y <0) {
    alert  ("Az érték nem lehet negatív");
    document.getElementById("input1").value = 0;
    y = 0
  }
var x = y * 10 + z * 150;
document.getElementById("eredmény").innerHTML = x;
}
