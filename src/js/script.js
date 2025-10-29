window.onload = function() {
    
    //this.document.getElementsByClassName("account-info").onclick = displayAccountInfo;
    fetch('/resources/json/posts.json')
        .then((response) => response.json())
        .then(json => {
            console.log(json);
            for (let i=json.length-1; i>=0; i--){
                let article = document.createElement("article");
                article.className="post";
                let upperbound = document.createElement("div");
                upperbound.className="flex_right"
                let accountpicture = document.createElement("img");
                accountpicture.src = json[i].accountPicture;
                let postdate = document.createElement("p");
                postdate.innerText = json[i].postDate;
                upperbound.appendChild(accountpicture);
                upperbound.appendChild(postdate);
                article.appendChild(upperbound);
                if(!(json[i].postImage == (null))){
                    let postimage = document.createElement("img");
                    postimage.src = json[i].postImage;
                    article.appendChild(postimage);
                }
                let posttext = document.createElement("p");
                posttext.innerText = json[i].postText;
                article.appendChild(posttext);
                let likebutton = document.createElement("img");
                likebutton.src = "resources/images/like.png";
                article.appendChild(likebutton);
                document.getElementsByClassName("posts_container")[0].append(article);
            }
        })
        .catch(err => {
            let errDiv = document.createElement("div");
            errDiv.className = 'post';
            errDiv.innerText = err;
            document.body.appendChild(errDiv);
        })
        .finally(() => {
            //let footer = document.createElement("footer");
            //date = new Date().toLocaleString()
            //footer.innerText = date;
            //document.body.appendChild(footer);
        })


}

function displayAccountInfo()
{
    console.log("asdasdasd");
    document.getElementByClassName("dropdown").style.visibility="visible";
}