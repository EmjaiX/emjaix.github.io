const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
document.addEventListener("scroll", function() {
    let head = document.querySelector(".head");
    if (head.offsetTop > 54) {
        let max = (screen.width - 20) + "px";
        head.style.width = max;
    } else
        head.style.width = "350px";

});