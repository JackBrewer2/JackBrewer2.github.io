function Coor(event) {
var x = event.clientX
var displayX = "X Coords: " + x;
var y = event.clientY
var displayY= "Y Coords: " + y;
document.getElementById("script2").innerHTML = displayY;
document.getElementById("script1").innerHTML = displayX;
}

var element1 = document.getElementById("select");


document.addEventListener('keydown', process1, false)

function process1(event){
   var element4 = event.keyCode;
   if (element4 == 67){
      var element3 = document.getElementsByClassName("one");
      element3[0].textContent = "X Coords: 0";
      element3[1].textContent = "Y Coords: 0";
      }
    }
