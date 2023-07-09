var a = 0 ; var b = -1; 
var arr = {}  ;
var c =0 ; 
document.getElementById('addBtn').addEventListener("click", displayData);
function displayData() {
  
    let txt = document.getElementById('inputTxt').value;
    let list = document.getElementById('list')
    
      if(txt){
        if(b>=7){
            error.innerHTML = "Too Many elements!";
            setTimeout(function(){

                error.innerHTML = "Number of elements : " + c;
            },4000);
            return ; 
        }
        b++; c++ ; 
        arr[b] = "<li>"+txt+"</li>";
        error.innerHTML = "Number of elements : " + c;
            if(b> a){
                list.innerHTML += "<li >➡️</li>";
            }
            list.innerHTML  = list.innerHTML + arr[b];
        
      }
  document.getElementById('inputTxt').value = '';
}
document.getElementById('delete_front').addEventListener("click", delete_front);

function delete_front(){
    if(b == -1){
        return ;
    }
    b-- ;c-- ;
    list.innerHTML = "" ; 
    error.innerHTML = "Number of elements : " + c;
    for(var i = a ; i <=b ;i++ ){
        if(i>a){
            list.innerHTML += "<li>➡️</li>";
        }
        list.innerHTML =  list.innerHTML + arr[i] ; 
    }
}

