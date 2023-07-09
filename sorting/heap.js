var container = document.getElementById("array");
var stop = false;
var s = 0; //swap counter
function generatearray() {
  s = 0;
  document.getElementById("swip").innerHTML = "Swap Counter : 0";
  var container1 = document.getElementById("div");
  stop = false;
  var elements = container.getElementsByClassName("block");

  while (elements[0]) {
    elements[0].parentNode.removeChild(elements[0]);
  }
  for (var i = 0; i < 10; i++) {
    var value = Math.ceil(Math.random() * 100);

    var array_ele = document.createElement("div");

    array_ele.classList.add("block");

    array_ele.style.height = `${80}px`;
    array_ele.style.transform = `translate(${i * 86}px)`;

    var array_ele_label = document.createElement("label");
    array_ele_label.classList.add("block_id");
    array_ele_label.innerText = value;

    array_ele.appendChild(array_ele_label);
    container.appendChild(array_ele);
  }
}

function swap(el1, el2) {
  s++;
  document.getElementById("swip").innerHTML = "Swap Counter :" + s;
  return new Promise((resolve) => {
    // var temp = el1.style.transform;
    // el1.style.transform = el2.style.transform;
    // el2.style.transform = temp;

    window.requestAnimationFrame(function () {
      setTimeout(() => {
        container.insertBefore(el2, el1);
        resolve();
      }, 800);
    });
  });
}

// Asynchronous Heapify function
async function Heapify(n, i) {
var blocks = document.querySelectorAll(".block");
var largest = i; // Initialize largest as root
var l = 2 * i + 1; // left = 2*i + 1
var r = 2 * i + 2; // right = 2*i + 2

// If left child is larger than root
if (
	l < n &&
	Number(blocks[l].childNodes[0].innerHTML) >
	Number(blocks[largest].childNodes[0].innerHTML)
)
{
  blocks[l].style.backgroundColor = "#c0a6f6";
	largest = l;
}
// If right child is larger than largest so far
if (
	r < n &&
	Number(blocks[r].childNodes[0].innerHTML) >
	Number(blocks[largest].childNodes[0].innerHTML)
)
{
  blocks[r].style.backgroundColor = "#c0a6f6";
	largest = r;
}
// If largest is not root
if (largest != i) {
	var temp1 = blocks[i].style.height;
	var temp2 = blocks[i].childNodes[0].innerText;
	blocks[i].style.height = blocks[largest].style.height;
	blocks[largest].style.height = temp1;
	blocks[i].childNodes[0].innerText =
	blocks[largest].childNodes[0].innerText;
	blocks[largest].childNodes[0].innerText = temp2;

	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, 500)
	);

	// Recursively Hapify the affected sub-tree
	await Heapify(n, largest);
}
}

// Asynchronous HeapSort function
async function HeapSort(n) {
    stop = false ;
var blocks = document.querySelectorAll(".block");

// Build heap (rearrange array)
for (var i = n / 2 - 1; i >= 0; i--) {
	await Heapify(n, i);
}

// One by one extract an element from heap
for (var i = n - 1; i > 0; i--) {

	// Move current root to end
	var temp1 = blocks[i].style.height;
	var temp2 = blocks[i].childNodes[0].innerText;
	blocks[i].style.height = blocks[0].style.height;
	blocks[0].style.height = temp1;
	blocks[i].childNodes[0].innerText =
	blocks[0].childNodes[0].innerText;
	blocks[0].childNodes[0].innerText = temp2;
    if(stop){
        return ; 
    }

	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, 550)
	);

	// Call max Heapify on the reduced heap
  //  bars[i].style.backgroundColor = "#009933";
	await Heapify(i, 0);
}
}

// Calling generatearray function
generatearray();

// Calling generate_idx function
// generate_idx();

// Calling HeapSort function

function stopsort() {
    stop = true;
  }
