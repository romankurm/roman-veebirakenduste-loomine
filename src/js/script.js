window.onload = function() {
    fetch('/resources/json/myjson.json')
        .then((response) => response.json())
        .then(json => {
            console.log(json);
            for (item in json){
                let div = document.createElement("div");
                let title = document.createElement("h3");
                title.innerText = json[item].title;
                let tekst = document.createElement("p");
                tekst.innerText = json[item].body;
                tekst.className="text"
                div.appendChild(title);
                div.appendChild(tekst);
                div.className="post"
                document.getElementById("body").append(div);
            }
        })
        .catch(err => {
            let errDiv = document.createElement("div");
            errDiv.className = 'post';
            errDiv.innerText = err;
            document.body.appendChild(errDiv);
        })
        .finally(() => {
            let footer = document.createElement("footer");
            date = new Date().toLocaleString()
            footer.innerText = date;
            document.body.appendChild(footer);
        })


}