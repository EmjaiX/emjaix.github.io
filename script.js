let buttons = document.querySelectorAll("button");

buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        load(button.innerHTML);
    });
})

function load(name){
    let list = document.querySelectorAll(".panelMain")
    list.forEach(element => {
        element.classList.remove("panelMain"); // Remove mystyle class from DIV
        element.classList.add("panelSub"); // Add newone class to DIV
    });
    let item = document.querySelector('#'+name)
    item.classList.remove("panelSub");
    item.classList.add("panelMain");
    // console.log(name);
}