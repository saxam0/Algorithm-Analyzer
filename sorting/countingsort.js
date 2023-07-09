var container = document.getElementById("array");
var count_container = document.getElementById("count");
// Function to generate the array of blocks
function generatearray() {

var elements = container.getElementsByClassName("block");
while (elements[0]) {
    elements[0].parentNode.removeChild(elements[0]);
}


for (var i = 0; i < 15; i++) {
	// Return a value from 1 to 100 (both inclusive)
	var value = Math.ceil(Math.random() * 15);

	// Creating element div
	var array_ele = document.createElement("div");

	// Adding class 'block' to div
	array_ele.classList.add("block");

	// Adding style to div
	array_ele.style.height = `${50}px`;
	array_ele.style.transform = `translate(${i * 56}px)`;

	// Creating label element for displaying
	// size of particular block
	var array_ele_label = document.createElement("label");
	array_ele_label.classList.add("block_id");
	array_ele_label.innerText = value;

	// Appending created elements to index.html
	array_ele.appendChild(array_ele_label);
	container.appendChild(array_ele);
}

}

// Function to generate the frequency array

function generate_freq() {
	
for (var i = 0; i < 15; i++) {
	// Creating element div
	var array_ele2 = document.createElement("div");

	// Adding class 'block2' to div
	array_ele2.classList.add("block2");

	// Adding style to div
	array_ele2.style.height = `${50}px`;
	array_ele2.style.transform = `translate(${i * 56}px)`;

	// index of freq array
	var array_ele_idx = document.createElement("label");
	array_ele_idx.classList.add("block_id2");
	array_ele_idx.innerText = i + 1;

	//giving initial freq to all blocks as 0
	var array_ele_label2 = document.createElement("label");
	array_ele_label2.classList.add("block_id3");
	array_ele_label2.innerText = 0;

	// Appending created elements to index.html
	array_ele2.appendChild(array_ele_label2);
	array_ele2.appendChild(array_ele_idx);
	count_container.appendChild(array_ele2);
}
}

// Asynchronous CountingSort function
async function CountingSort(delay = 250) {
stop = false ; 
var blocks = document.querySelectorAll(".block");
// To store frequency of every block
for (var i = 0; i < 15; i += 1) {
	//To highlight the current traversed block
    if(stop){
        return ; 
    }
	blocks[i].style.backgroundColor = "#FF4949";

	//Extracting the value of current block
	var value = Number(blocks[i].childNodes[0].innerHTML);

	var freq_array = document.getElementsByClassName("block_id3");
    var freq1_array = document.getElementsByClassName("block2");
	freq_array[value - 1].innerText++;
    freq1_array[value-1].style.backgroundColor = "#ddb3e4";
	// To wait for .1 sec
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, delay)
	);

	//Changing to previous color
	blocks[i].style.backgroundColor = "blue";
}

//Sorting by using frequency array
var idx = 0;
for (var i = 0; i < 15; i += 1) {
	if(stop){
        return ; 
    }
	var freq = document.getElementsByClassName("block_id3");

	var temp = Number(freq[i].innerText);

	var freq_block = document.getElementsByClassName("block2");

	//changing color of freq block
	freq_block[i].style.backgroundColor = "#a53db7";

	// To wait for .1 sec
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, 2 * delay)
	);

	if (temp == 0) {
	//changing color of freq block to previous one
	freq_block[i].style.backgroundColor = "darkgray";
	continue;
	}

	var block_label = document.getElementsByClassName("block_id");

	//sorting the block array
    // blocks[i].style.backgroundColor = "#a53db7";
	for (var j = 0; j < temp; j++) {
    blocks[idx].style.backgroundColor = "#a53db7";
	blocks[idx].style.height = `${50}px`;
	block_label[idx].innerText = i + 1;    
	idx++;
	}

	//changing color of freq block to previous one
	freq_block[i].style.backgroundColor = "darkgray";

	// To wait for .1 sec
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, 2 * delay)
	);
}
}

// Calling generatearray function
generatearray();

// Calling generate_freq function
generate_freq();

function stopsort() {
	stop = true ; 
}

function clear_freq() {
	stop = true ; 
	var blocks = document.querySelectorAll(".block");

for (var i = 0; i < 15; i += 1) {
	
	blocks[i].style.backgroundColor = "#FF4949";

	//Extracting the value of current block
	var value = Number(blocks[i].childNodes[0].innerHTML);

	var freq_array = document.getElementsByClassName("block_id3");
    var freq1_array = document.getElementsByClassName("block2");
	freq_array[i].innerText = 0;
    freq1_array[i].style.backgroundColor = "darkgray";
	
	blocks[i].style.backgroundColor = "blue";
}
	}	
