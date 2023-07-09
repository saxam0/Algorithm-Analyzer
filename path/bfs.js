function generateRows(num){
	return '<div class="cells"></div>'.repeat(num);
}
let nrows = 13;
let ncols = 27;
var Sx = 6 ; 
var Sy = 13  ;
let visited = {};
let obst = {} ; 
document.getElementById("graph").innerHTML = ('<div class="rows">' + generateRows(ncols) + '</div>').repeat(nrows);

let cells = document.querySelectorAll(".cells");
let isPlay = true;  
cells[(Sx * ncols) +Sy].classList.add("start") ; 

document.getElementById("clear").addEventListener("click", function(){
	if(!isPlay){
		return ;
	}

	for (let j=0; j<cells.length; j++){
        obst[j] = 0 ;
    }
    for (let j=0; j<cells.length; j++){
	cells[j].innerHTML = "" ;
	cells[j].classList.remove("found");
        cells[j].classList.remove("selected");
        cells[j].classList.remove("path");
        cells[j].classList.remove("target");
        cells[j].classList.remove("hover");
        cells[j].classList.remove("showPath");
        cells[j].classList.remove("blue");
        cells[j].classList.remove("fastest");
		cells[j].classList.remove("obst");
    }
});


for (let i=0; i<cells.length; i++){
	if(obst[i]==1){
		continue ; 
	}
	cells[i].addEventListener("click", function(){

		if (isPlay){
			for (let j=0; j<cells.length; j++){
				cells[j].innerHTML = "" ;
				cells[j].classList.remove("found");
				cells[j].classList.remove("selected");
				cells[j].classList.remove("path");
				cells[j].classList.remove("target");
				cells[j].classList.remove("hover");
				cells[j].classList.remove("showPath");
				cells[j].classList.remove("blue");
				cells[j].classList.remove("fastest");
			}
			this.classList.add("selected");
			visited = {} ; 
			bfs(i);
		}
	});
}



function bfs(target){
	let start = (Sx * ncols) +Sy;

	isPlay = false;

	
	visited[start] = true;

	let parent = {}
	parent[start] = -1;

	let queue = [start];
	let delay = 800;

	while (queue.length != 0){
        
		let head = queue.shift();

		if (head==target){
			(function(headCopy,delayCopy){
				setTimeout(function(){
					cells[headCopy].classList.add("target");
					displayPath(target, parent);
				},delayCopy);
			})(head, delay);
			break;
		}

		(function(headCopy,delayCopy){
			setTimeout(function(){
				cells[headCopy].classList.add("fastest");
			},delayCopy);
		})(head, delay-580);

		(function(headCopy,delayCopy){
			setTimeout(function(){
				cells[headCopy].classList.add("blue");
			},delayCopy);
		})(head, delay-380);

		(function(headCopy,delayCopy){
			setTimeout(function(){
				cells[headCopy].classList.add("path");
			},delayCopy);
		})(head, delay);

		delay += 20;

		if ((head%ncols)>0 && !((head-1) in visited) && !(obst[head-1] == 1)  ){
		//Left Cell
		queue.push(head-1);
		visited[head-1] = true;
		parent[head-1] = head;
		}


		if ((head%ncols)<(ncols-1) && !((head+1) in visited) && !(obst[head+1] == 1) ){
		//Right Cell
		queue.push(head+1);
		visited[head+1] = true;
		parent[head+1] = head;
		}


		if ( (Math.floor(head/ncols))>0 && !((head-ncols) in visited) && !(obst[head-ncols] == 1) ) {
		//Top Cell
		queue.push(head-ncols);
		visited[head-ncols] = true;
		parent[head-ncols] = head;
		}


		if ( (Math.floor(head/ncols))<nrows-1 && !((head+ncols) in visited) && !(obst[head+ncols] == 1) ){
		//Bottom Cell
		queue.push(head+ncols);
		visited[head+ncols] = true;
		parent[head+ncols] = head;
		}

	}
}

function displayPath(tar, par){
	let delay = 0;
	let temp = tar;
    var f = tar ; 
	while(temp != -1){
		delay += 50;
		temp = par[temp];
	}

	setTimeout(function(){
		isPlay = true;
	},delay+2);
    var p = {} ; //left
	while (tar != -1){
		(function(tarCopy, delayCopy){
			setTimeout(function(){
				if(tarCopy == f){
					cells[tarCopy].classList.add("found"); 	
				}else{
					cells[tarCopy].classList.add("showPath"); 	
				}
				
				if(p[tarCopy]==0){
					cells[tarCopy].innerHTML = "<h1 id = dot>⮞</h1>" ;
				}else if(p[tarCopy]==1){
					cells[tarCopy].innerHTML = "<h1 id = dot>⮜</h1>" ;
				}else if(p[tarCopy]==2){
					cells[tarCopy].innerHTML = "<h1 id = dot>⮟</h1>" ;
				}else if(p[tarCopy]==3){
					cells[tarCopy].innerHTML = "<h1 id = dot>⮝</h1>" ;
				}else{
					cells[tarCopy].innerHTML = "<h1 id = dot>🎯</h1>" ;
		
				
				}
				
			},delayCopy);
		})(tar, delay);
		delay -= 50;
		if(par[tar] == -1){
			p[par[tar]] = 4 ; 
		}else if(par[tar] == tar-1){
			p[par[tar]] = 0 ; 
		}else if(par[tar] == tar+1){
			p[par[tar]] = 1
		}else if(par[tar] == tar-ncols){
			p[par[tar]]= 2
		}else if(par[tar] == tar+ncols){
			p[par[tar]] = 3
		}
		tar = par[tar];
	}

}
document.getElementById("obs").addEventListener("click", function(){

    for (let j=0; j<cells.length; j++){
	cells[j].innerHTML = "" ;
	cells[j].classList.remove("found");
        cells[j].classList.remove("selected");
        cells[j].classList.remove("path");
        cells[j].classList.remove("target");
        cells[j].classList.remove("hover");
        cells[j].classList.remove("showPath");
        cells[j].classList.remove("blue");
        cells[j].classList.remove("fastest");
		cells[j].classList.remove("obst");
    }
	for (let j=0; j<cells.length; j++){
        obst[j] = 0 ;
    }
    for(let j = 0 ; j <100 ; j++){
		var y = Math.floor(Math.random()*cells.length) ; 
		if(obst[y] ==1 || y == (Sx * ncols) +Sy || y == (Sx * ncols) +Sy-1 || y == (Sx * ncols) +Sy+1 || y == (Sx * ncols) +Sy+ncols || y == (Sx * ncols) +Sy - ncols){
			j-- ; 

		}else{
			obst[y] = 1 ; 
			cells[y].classList.add("obst") ; 
		}
	}
});																									
