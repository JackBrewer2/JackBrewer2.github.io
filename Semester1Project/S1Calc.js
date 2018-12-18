function myFunction() {
  document.getElementById("myMenu").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.btn')) {
    var dropdowns = document.getElementsByClassName("menu-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function showresult(choise){
var n1=parseFloat(document.getElementById('num1').value);
var n2=parseFloat(document.getElementById('num2').value);
var r;
var c=choise;

switch(c)
	{
	case '1':
		r=n1+n2;
		break;
	case '2':
		r=n1-n2;
		break;
	case '3':
		r=n1*n2;
		break;
	case '4':
		r=n1/n2;
		break;
	case '5':
		r=n2*100/n1;
		break;
	default:
		break;

	}
document.getElementById('result').value=r;



}
