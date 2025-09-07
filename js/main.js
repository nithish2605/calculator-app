//getting the values
var keys = document.querySelectorAll(".keys");
var display =  document.querySelector("#display");
let clear = document.querySelector("#refresh");

//displaying values while clicking the keys
keys.forEach(key =>{
    key.addEventListener('click',()=>{
        let value = key.textContent;
        let curvalue = display.textContent;
        if(value === "+" &&curvalue.endsWith('+')){
            return;
        }
         if(value === "-" &&curvalue.endsWith('-') ){
            return;
        }
         if(value === "X" &&curvalue.endsWith('X')){
            return;
        }
        display.textContent += value ;
    })
});

//clearing the calci
clear.addEventListener("click",()=>{
    display.textContent="";
});




