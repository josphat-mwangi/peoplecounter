let saveEl = document.getElementById("save-el");
countEl = document.getElementById("count-el");
let count = 0;


function increment(){
    count += 1;
    countEl.textContent = count;
}

function decrement(){
    if (count == 0){
        count = 0;
    }
    else{
        count -= 1;
        countEl.textContent = count;
    }
}

function save(){
    let counter = count + " - ";
    saveEl.textContent += counter;
    countEl.textContent = 0;
    count = 0; 
}
 