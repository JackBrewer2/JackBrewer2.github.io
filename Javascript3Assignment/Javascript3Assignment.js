function data (hom, vis){
  this.home = hom;
  this.visitor = vis;
  this.hScore = Math.floor((Math.random() * 20) + 70);
  this.aScore = Math.floor((Math.random() * 20) + 70);
  this.score = function() {
    return[this.home, this.hScore, this.visitor, this.aScore]
  }

}

var date = new Array();

date[0] = new data("Boston", "Cleveland");
date[1] = new data("Portland", "Utah");
date[2] = new data("Oklahoma City", "Golden State");
date[3] = new data("Chicago", "San Antonio");
date[4] = new data("Washington", "Philadelphia");
date[5] = new data("Miami", "Houston");

var game1 = document.getElementById("Game1");
game1.textContent = date[0].score();

var game2 = document.getElementById("Game2");
game2.textContent = date[1].score()

var game3 = document.getElementById("Game3");
game3.textContent = date[2].score()

var game4 = document.getElementById("Game4");
game4.textContent = date[3].score()

var game5 = document.getElementById("Game5");
game5.textContent = date[4].score()

var game6 = document.getElementById("Game6");
game6.textContent = date[5].score()
