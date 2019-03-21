// SELECT ELEMENTS 
const clear = document.querySelector(".clear"); 
const dateElement= document.getElementById("date"); 
const list = document.getElementById("list"); 
const input = document.getElementById("input"); 

// CLASS NAMES 
const CHECK = "fa-check-circle"; 
const UNCHECK = "fa-circle-thin"; 
const LINE_THROUGH = "lineThrough"; 

//SHOW TODAYS DATE 
const options = {weekday:"long", month:"short", day:"numeric"}; 
const today = new Date(); 
dateElement.innerHTML  = today.toLocaleDateString("en-US", options); 