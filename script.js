// const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
// document.addEventListener("scroll", function() {
//     let head = document.querySelector(".head");
//     if (screen.width > 768) {
//         if (head.offsetTop > 54) {
//             let max = "100vw";
//             head.style.width = max;
//         } else
//             head.style.width = "350px";
//     }
// });
fetch("./fullstack.json")
    .then(response => { return response.json() })
    .then(json => {
        let img = document.createElement("img");
        img.src = json["img"];
        let lang = document.createElement("div");
        let head1 = document.createElement("h3");
        head1.innerHTML = "Languages";
        lang.appendChild(head1);
        json["langauges"].forEach(ele => {
            lang.innerHTML += ele + "<br><br>"
        });

        let tools = document.createElement("div");
        let head2 = document.createElement("h3");
        head1.innerHTML = "Dev Tools";
        lang.appendChild(head1);
        json["devtools"].forEach(ele => {
            lang.innerHTML += ele + "<br><br>"
        });

        let parent = document.querySelector("#fullstack")
        parent.appendChild(img);
        parent.innerHTML += json["data"];
        parent.appendChild(lang);

    });
fetch("./front-end.json")
    .then(response => { return response.json() })
    .then(json => {
        let img = document.createElement("img");
        img.src = json["img"];
        let lang = document.createElement("div");
        let head1 = document.createElement("h3");
        head1.innerHTML = "Languages";
        lang.appendChild(head1);
        json["langauges"].forEach(ele => {
            lang.innerHTML += ele + "<br><br>"
        });

        let tools = document.createElement("div");
        let head2 = document.createElement("h3");
        head1.innerHTML = "Dev Tools";
        lang.appendChild(head1);
        json["devtools"].forEach(ele => {
            lang.innerHTML += ele + "<br><br>"
        });

        let parent = document.querySelector("#front-end")
        parent.appendChild(img);
        parent.innerHTML += json["data"];
        parent.appendChild(lang);

    });
fetch("./back-end.json")
    .then(response => { return response.json() })
    .then(json => {
        let img = document.createElement("img");
        img.src = json["img"];
        let lang = document.createElement("div");
        let head1 = document.createElement("h3");
        head1.innerHTML = "Languages";
        lang.appendChild(head1);
        json["langauges"].forEach(ele => {
            lang.innerHTML += ele + "<br><br>"
        });

        let tools = document.createElement("div");
        let head2 = document.createElement("h3");
        head1.innerHTML = "Dev Tools";
        lang.appendChild(head1);
        json["devtools"].forEach(ele => {
            lang.innerHTML += ele + "<br><br>"
        });

        let parent = document.querySelector("#back-end")
        parent.appendChild(img);
        parent.innerHTML += json["data"];
        parent.appendChild(lang);

    });