var container = document.getElementById("array");
var stop = false;
function generatearray() {
  document.getElementById("swap").innerHTML = "Swap Counter : 0";
  var container1 = document.getElementById("div");
  stop = false;
  var elements = container.getElementsByClassName("block");

  while (elements[0]) {
    elements[0].parentNode.removeChild(elements[0]);
  }
let arr = []; 
  for (var i = 0; i < 10; i++) {
    var value = Math.ceil(Math.random() * 100);
    arr[i] = value ; 
  }
  arr.sort(function(a, b) {return a - b;  });
  for (var i = 0; i < 10; i++) {
    var value = arr[i];

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
// Asynchronous BinarySearch function
async function BinarySearch(delay = 450) {
    var blocks = document.querySelectorAll(".block");
    var output = document.getElementById("text");
   
    //Extracting the value of the element to be searched
    var num = document.getElementById("fname").value;
   
    //Colouring all the blocks violet
    for (var i = 0; i < blocks.length; i += 1) {
      blocks[i].style.backgroundColor = "#6b5b95";
    }
   
    output.innerText = "";
   
    // BinarySearch Algorithm
   
    var start = 0;
    var end = 9;
    var flag = 0;
    while (start <= end) {
      //Middle index
      var mid = Math.floor((start + end) / 2);
      blocks[mid].style.backgroundColor = "#FF4949";
   
      //Value at mid index
      var value = Number(blocks[mid].childNodes[0].innerHTML);
   
      // To wait for .1 sec
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
   
      //Current element is equal to the element
      //entered by the user
      if (value == num) {
        output.innerText = "Element Found";
        blocks[mid].style.backgroundColor = "#13CE66";
        flag = 1;
        break;
      }
      //Current element is greater than the element
      //entered by the user
      if (value > num) {
        end = mid - 1;
        blocks[mid].style.backgroundColor = "#6b5b95";
      } else {
        start = mid + 1;
        blocks[mid].style.backgroundColor = "#6b5b95";
      }
    }
    if (flag === 0) {
      output.innerText = "Element Not Found";
    }
  }
   
  // Calling generatearray function
  generatearray();
