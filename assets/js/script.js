'use strict';

var movies_List;
var movies_Name = [];
var hulk = new Movie('hulk', '20-06-2003', 'eric bana', 'avi arad');
var thor = new Movie('thor', '17-4-2011', 'jane foster', 'kenneth branagh');
var ironman = new Movie('ironman', '14-4-2008', 'rober downey', 'marval studios');
var narnia = new Movie("narnia", "10-11-1996", "harry swan", "gorge lucifer lucifer");
var antman = new Movie('antman', '24-7-2015', 'paul rudd', '‎kevin feige');
var everest = new Movie('everest', '16-9-2015', 'jason clarke', 'baltasar kormákur');
var spectre = new Movie('spectre', '20-11-2015', 'deniel craig', ' ‎michael wilson‎');
var creed = new Movie('creed', '27-11-2015', 'michael jorden', ' ryan coogler');
var aquaman = new Movie('aquaman', '14-12-2018', 'jason momoa', 'peter safran');
var halloween = new Movie('halloween', '27-10-2018', 'nick castle', 'malek akkad');
var movies_List = [hulk, thor, ironman, narnia, antman, everest, spectre, creed, aquaman, halloween];


function Movie(name, date, actor, producer) {
  this.movie_name = name;
  this.release_date = date;
  this.actor_name = actor;
  this.producer_name = producer;
  this.show = show;
  this.result = result;
}

for (var i = 0; i < movies_List.length; i++) {
  movies_List[i].show();
}

document.querySelector('#submit').addEventListener('click', searchmovie);

function searchmovie(e) {
  e.preventDefault();
  var mainChild = document.querySelector('.result');
  var first_Ul_Remove = document.querySelectorAll('.result ul:not(:first-of-type)');

  for (var i = first_Ul_Remove; i > 0; i--) {
    mainChild.removeChild(mainChild.children[i]);
  }

  var input = document.querySelector('#input_value').value.toLowerCase();
  var searchName = [];

  movies_Name.forEach(function (value) {
    var a = value;
    if (a.indexOf(input) !== -1) {
      searchName.push(a);
    }
  })



  for (var j = 0; j < searchName.length; j++) {
    for (var i = 0; i < movies_List.length; i++) {
      if (movies_List[i].movie_name == searchName[j] || movies_List[i].actor_name == searchName[j]) {
        movies_List[i].result();
      }
    }
  }
  document.getElementById('myform').reset();
};

function show() {
  var ulNode = document.createElement("ul");
  var p_node = document.querySelector(".display");
  for (var specs in this) {
    if (specs !== 'show' && specs !== 'result') {
      var liNode = document.createElement('li');
      liNode.textContent = (this[specs]);
      ulNode.appendChild(liNode);
      if (specs == "movie_name" || specs == "actor_name") {
        movies_Name.push(this[specs]);
      }
    }
  }
  p_node.appendChild(ulNode);
  console.log(p_node);
}

function result() {
  var ulNode = document.createElement("ul");
  var p_Node = document.querySelector(".result");
  for (var specs in this) {

    if (specs !== "show" && specs !== "result") {
      var liNode = document.createElement("li");
      liNode.textContent = (this[specs]);
      ulNode.appendChild(liNode);
    }
  }
  p_Node.appendChild(ulNode);
}

