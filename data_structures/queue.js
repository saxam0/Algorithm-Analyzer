var a = 0 ; var b = -1; 
var arr = {}  ;
var c =0 ; 
document.getElementById('addBtn').addEventListener("click", displayData);
function displayData() {
  
    let txt = document.getElementById('inputTxt').value;
    let list = document.getElementById('list')
    
      if(txt){
        if((b-a)>=10){
            error.innerHTML = "Too Many elements!";
            setTimeout(function(){

                error.innerHTML = "Number of elements : " + c;
            },4000);
            return ; 
        }
        b++; c++ ; 
        arr[b] = "<li>"+txt+"</li>";
        error.innerHTML = "Number of elements : " + c;
            
            list.innerHTML  = list.innerHTML + arr[b];
        
      }
  document.getElementById('inputTxt').value = '';
}
document.getElementById('delete_front').addEventListener("click", delete_front);

function delete_front(){
    if(a>b){
        return ;
    }
    a++ ;c-- ;
    list.innerHTML = "" ; 
    error.innerHTML = "Number of elements : " + c;
    for(var i = a ; i <=b ;i++ ){
     
        list.innerHTML =  list.innerHTML + arr[i] ; 
    }
}

