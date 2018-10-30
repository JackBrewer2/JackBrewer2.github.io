var foodChoices = ["Burger" , "Sushi" , "Pizza" , "Wings" , "Shrimp" , "Candy"];

function random(foodChoices)
{
  return foodChoices[Math.floor(Math.random() * foodChoices.length)];
}


var de = document.getElementById("first");


de.textContent = random(foodChoices);

var re = document.getElementById("second");


re.textContent = random(foodChoices);


var me = document.getElementById("third");


me.textContent = random(foodChoices);


var fa = document.getElementById("fourth");


fa.textContent = random(foodChoices);
