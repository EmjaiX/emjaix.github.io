let buttons = document.querySelectorAll("button");

buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        load(button.innerHTML);
    });
})

function load(name){
    console.log(name);
}