var element1 = document.querySelector("h1.first");
element1.innerHTML = "<b><i>This is selected by the query selector, and is bolded and italisized.</i></b>";

var element3 = document.createElement("li");
var textOf3 = document.createTextNode("I appended it.");
element3.appendChild(textOf3);

var element2 = document.getElementsByTagName("li");
var elementOf2 = element2[0];
var parent = elementOf2.parentNode;

parent.appendChild(element3);

var element4 = document.getElementsByClassName("third");
element4[0].setAttribute("class", "first");

/*var element6 = document.createElement("li");
var element7 = document.createTextNode("I added this li tag.");
element6.appendChild(element7);
document.body.appendChild(element6);
*/
