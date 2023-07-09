var container = document.getElementById("array");
var stop = false;
var s = 0; //swap counter
function generatearray() {
  s = 0;
  document.getElementById("swap").innerHTML = "Swap Counter : 0";
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
  document.getElementById("swap").innerHTML = "Swap Counter :" + s;
  return new Promise((resolve) => {
    var temp = el1.style.transform;
    el1.style.transform = el2.style.transform;
    el2.style.transform = temp;

    window.requestAnimationFrame(function () {
      setTimeout(() => {
        container.insertBefore(el2, el1);
        resolve();
      }, 800);
    });
  });
}

async function InsertionSort(delay = 500) {
	stop = false ;
	let bars = document.querySelectorAll(".block");
	
	// Provide colour to 0th bar
	bars[0].style.backgroundColor = "#c0a6f6";
	for (var i = 1; i < bars.length; i += 1) {
	
	  // Assign i-1 to j
	  var j = i - 1;
	
	  // To store the integer value of ith bar to key 
	  var key = parseInt(bars[i].childNodes[0].innerHTML);
	  await new Promise((resolve) =>
	  setTimeout(() => {
		resolve();
	  }, 500)
	);
	
	  // For placing selected element at its correct position 
	  while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {

		if(stop){
			return ; 
		}
		  
		bars[j].style.backgroundColor = "#c0a6f6";
		await swap(bars[j], bars[j + 1]);
		bars = document.querySelectorAll(".block");
	
		// Assign j-1 to j
		j = j - 1;
	
		// To pause the execution of code for 600 milliseconds
		await new Promise((resolve) =>
		  setTimeout(() => {
			resolve();
		  }, 500)
		);
		  
		// Provide color to the sorted part
		for(var k=i;k>=0;k--){
		  bars[k].style.backgroundColor = "#a53db7";
		}
	  }
	  bars[j + 1].childNodes[0].innerHTML = key;
	  await new Promise((resolve) =>
		setTimeout(() => {
		  resolve();
		}, 500)
	  );
	  bars[i].style.backgroundColor = "#a53db7";
	}
}
function stopsort() {
  stop = true;
}
generatearray();
