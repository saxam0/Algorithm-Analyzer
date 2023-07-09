// This prevents the page from scrolling down to where it was previously.
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

var boxes = document.querySelectorAll(".box");
var algo =  0 ;

update(0) ; 
function checkBoxes(){
  const triggerBottom = (window.innerHeight / 5) * 4;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) box.classList.add("show");
    else box.classList.remove("show");
  });
};  

window.addEventListener("scroll", checkBoxes);
checkBoxes();

class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}
var p1 = [
  'Arranging students of as class in order of their height',
  'During election, we want to know the order of the parties',
  'In any ecommerce website we sort items by price',

];
var p2 = [
 'In video games, the computer must direct opponents around the map',
 'Finding way through a maze',
 'Finding shortest distance between two locations',
 'Searching the web'
];
var p3 = [
  'To implement back functionality in the internet browser.',
  'To store the possible moves in a chess game.',
  'To store a ﬁxed key words which are used very frequently',
  'You need to evaluate an expression (i.e., parse). '
 ];
var p4 = [
  'To find out student with particular height in a class.',
  'Going back to the page where you left while reading a book.',
  'Finding a specific word in a dictionary.',
 ];
var phrases = p1;

const el = document.querySelector(".text");
const fx = new TextScramble(el);  

let counter = 0;
function next(){
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 3200);
  });
  counter = (counter + 1) % phrases.length;
};

next();

//update function 
function algo_change(algo){
  if(algo == 0){
    
    document.getElementById("1").style.color = '#a646c6';
    document.getElementById("2").style.color = '#680780';
    document.getElementById("3").style.color = '#680780'; 
    document.getElementById("4").style.color = '#680780';
    document.getElementById("choose").innerHTML = "Choose A Sorting Algorithm: " ; 
    phrases = p1 ; 
    document.getElementById("head").innerHTML = "Sorting" ; 
    document.getElementById("head2").innerHTML = "Sorting" ; 
    document.getElementById("info").innerHTML = "A sorting algorithm is a method for organizing a number of" 
    +" items into a specific<br>order, such as highest-to-lowest " 
    +"value or shortest-to-longest distance.<br><br>Real Life Examples: "; 
    
   document.getElementById("select_algo").innerHTML = "<div class=\"box\"><a href=\"sorting/bubblesort.html\" ><h2>Bubble Sort </h2></a></div><div class=\"box\"><a href=\"sorting/insertionsort.html\"  ><h2>Insertion Sort</h2></a></div><div class=\"box\"><a href=\"sorting/selectionsort.html\" ><h2>Selection sort</h2></a></div><div class=\"box\"><a href=\"sorting/heap.html\" ><h2>Heap Sort</h2></a></div><div class=\"box\"><a href=\"sorting/bucket.html\" ><h2>Bucket Sort</h2></a></div><div class=\"box\"><a href=\"sorting/countingsort.html\"  ><h2>Counting Sort</h2></a></div>";
   boxes = document.querySelectorAll(".box");
   checkBoxes() ; 
  }else if(algo == 1){
    document.getElementById("2").style.color = '#a646c6';
    document.getElementById("1").style.color = '#680780';
    document.getElementById("3").style.color = '#680780';  
    document.getElementById("4").style.color = '#680780';
    document.getElementById("choose").innerHTML = "Choose A Pathfinding Algorithm: " ; 
    phrases = p2 ; 
    document.getElementById("head").innerHTML = "Pathfinding" ; 
    document.getElementById("head2").innerHTML = "Pathfinding" ; 
    document.getElementById("info").innerHTML = "Pathfinding algorithms are used to identify optimal routes through a graph for <br> uses such as logistics planning,"
    +" least cost call or IP routing, and gaming simulation. <br><br>Real Life Examples: "; 

   document.getElementById("select_algo").innerHTML = "<div class=\"box\"><a href=\"path/bfs.html\" ><h2>BFS</h2></a></div><div class=\"box\"><a href=\"path/dfs.html\" ><h2>DFS</h2></a></div><div class=\"box\"><a href=\"path/dijkstra.html\" ><h2>DIJKSTRA</h2></a></div>";
   boxes = document.querySelectorAll(".box");
   checkBoxes() ; 
  }else if(algo == 2){
    document.getElementById("3").style.color = '#a646c6';
    document.getElementById("1").style.color = '#680780'; 
    document.getElementById("2").style.color = '#680780';
    document.getElementById("4").style.color = '#680780';
    document.getElementById("choose").innerHTML = "Choose A Data Structures: " ; 
    phrases = p3 ; 
    document.getElementById("head").innerHTML = "Data-Structure" ; 
    document.getElementById("head2").innerHTML = "Data-Structure" ; 
    document.getElementById("info").innerHTML = "In computer science, a data structure is a data organization, management,<br>and storage format that is usually chosen for efficient access to data <br><br>Real Life Examples: "; 

   document.getElementById("select_algo").innerHTML = "<div class=\"box\"><a href=\"data_structures/linked_list.html\" ><h2>Linked List</h2></a></div><div class=\"box\"><a href=\"data_structures/stack.html\" ><h2>Stack</h2></a></div><div class=\"box\"><a href=\"data_structures/queue.html\" ><h2>Queue</h2></a></div>";
   boxes = document.querySelectorAll(".box");
   checkBoxes() ; 
  }
  else{
    document.getElementById("4").style.color = '#a646c6';
    document.getElementById("1").style.color = '#680780'; 
    document.getElementById("2").style.color = '#680780';
    document.getElementById("3").style.color = '#680780';
    document.getElementById("choose").innerHTML = "Choose A Searching Method: " ; 
    phrases = p4 ; 
    document.getElementById("head").innerHTML = "Searching" ; 
    document.getElementById("head2").innerHTML = "Searching" ; 
    document.getElementById("info").innerHTML = "Searching is the process of finding the desired information from the set<br>of items stored in the form of elements in the computer memory.<br><br>Real Life Examples: "; 

   document.getElementById("select_algo").innerHTML = "<div class=\"box\"><a href=\"searching/linear_search.html\" ><h2>Linear Search</h2></a></div><div class=\"box\"><a href=\"searching/binary_search.html\" ><h2>Binary Search</h2></a></div>";
   boxes = document.querySelectorAll(".box");
   checkBoxes() ; 
  }
}

function update(new_algo){
  algo = new_algo ; 
  algo_change(algo) ;     
}
function uppar(){
  document.documentElement.scrollTop = 0;
}
