var a = 0 ; var b = -1; 
var arr = {}  ;
var c =0 ; 
list.innerHTML = "  Empty"
document.getElementById('addBtn').addEventListener("click", displayData);

function displayData() {
  
    let txt = document.getElementById('inputTxt').value;
    let list = document.getElementById('list')
    
      if(txt){
        if(b>5){
            error.innerHTML = "Too Many elements!";
            setTimeout(function(){

                error.innerHTML = "Number of elements : " + c;
            },4000);
            return ; 
        }

        b++; c++ ; 
        
        if(b-a <0){
            list.innerHTML = "  Empty"
        }else if(b==a){
            list.innerHTML = ""
        }
        arr[b] = "<li>"+txt+"</li>";
        error.innerHTML = "Number of elements : " + c;
            
            list.innerHTML  =  arr[b] + list.innerHTML ;
        
      }
  document.getElementById('inputTxt').value = '';
}
document.getElementById('delete_front').addEventListener("click", delete_front);

function delete_front(){
    if(b == -1){
        list.innerHTML = "Empty"
        return ;
    }
    b-- ;c-- ;
    list.innerHTML = "" ; 
    if(b-a <0){
        list.innerHTML = "Empty"
    }else{
        list.innerHTML = "" ; 
    }
    error.innerHTML = "Number of elements : " + c;
    for(var i = a ; i <=b ;i++ ){
       
        list.innerHTML = arr[i] + list.innerHTML  ; 
        
    }
}

