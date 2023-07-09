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
// Asynchronous LinearSearch function
async function LinearSearch(delay = 300) {
    var blocks = document.querySelectorAll(".block");
    var output = document.getElementById("text");
    
    //Extracting the value entered by the user
    var num = document.getElementById("fname").value;
    
    //Changing the color of all the blocks to violet
    for (var i = 0; i < blocks.length; i += 1) {
        blocks[i].style.backgroundColor = "#6b5b95";
    }
    
    output.innerText = "";
    
    var flag = 0;
    // LinearSearch Algorithm
    for (var i = 0; i < blocks.length; i += 1) {
        //Changing the color of current block to red
        blocks[i].style.backgroundColor = "#FF4949";
    
        // To wait for .1 sec
        await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, delay)
        );
    
        //Extracting the value of current block
        var value = Number(blocks[i].childNodes[0].innerHTML);
    
        // To compare block value with entered value
        if (value == num) {
        flag = 1;
        output.innerText = "Element Found";
        blocks[i].style.backgroundColor = "#13CE66";
        break;
        } else {
        // Changing the color to the previous one
        blocks[i].style.backgroundColor = "#6b5b95";
        }
    }
    //When element is not found in the array
    if (flag == 0) {
        output.innerText = "Element Not Found";
    }
    }
    
    // Calling generatearray function
    generatearray();
    