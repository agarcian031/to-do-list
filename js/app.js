// SELECT ELEMENTS 
const clear = document.querySelector(".clear"); 
const dateElement= document.getElementById("date"); 
const list = document.getElementById("list"); 
const input = document.getElementById("input"); 

// CLASS NAMES 
const CHECK = "fa-check-circle"; 
const UNCHECK = "fa-circle-thin"; 
const LINE_THROUGH = "lineThrough"; 

// ADD ITEMS TO VARIABLES 
let LIST = [], id = 0; 


//SHOW TODAYS DATE 
const options = {weekday:"long", month:"short", day:"numeric"}; 
const today = new Date(); 
dateElement.innerHTML  = today.toLocaleDateString("en-US", options); 

// ADD TODO FUNCTION 
function addToDo(toDo, id, done, trash){

    if(trash){return;}

    const DONE = done ? CHECK : UNCHECK; 
    const LINE = done ? LINE_THROUGH : ""; 

    const item = `
                <li class="item">
                <i class="fa ${DONE} co" job="complete" id="${id}"></i>
                <p class="text ${LINE}">${toDo}</p>
                <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                </li> 
    `; 
    const position = "beforeend"; 

    list.insertAdjacentHTML(position, item); 
}

// ADD AN ITEM TO THE LIST - USER INPUT 
document.addEventListener("keyup", function(even){
    if(event.keyCode == 13) {
        const toDo = input.value; 

        //IF THE INPUT IS !EMPTY 
        if(toDo){
            addToDo(toDo, id, false, false);
            
            LIST.push({
                name : toDo,  
                id : id, 
                done : false,
                trash : false 
            }); 
            id++; 
        }
        input.value = ""; 
    }
}); 

// COMPLETE TODO FUNCTION - if user checks/unchecks circle
function completeToDo(element){
    element.classList.toggle(CHECK); 
    element.classList.toggle(UNCHECK); 
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH); 

    LIST[element.id].done = LIST[element.id].done ? false : true; 
}