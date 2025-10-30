window.onload = function() {

    this.document.getElementById("dropdown-button").addEventListener('click', function(){
        displayAccountInfo();
    })
    
    if (this.document.getElementsByClassName("posts_container")[0] != null){
    // fetch('https://www.jsonkeeper.com/b/X1TBT') with online JSON storage
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
                postdate.className="post_date";
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
                posttext.className = 'post_text';
                    article.appendChild(posttext);
                    let likebutton = document.createElement("img");
                    likebutton.src = "resources/images/like.png";
                likebutton.className = "like-button";
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
            })}


}

function displayAccountInfo() {
    dropdown = document.getElementById("account-info");
    if (dropdown == null){
        dropdown = createAccountInfoDropdown();
    }
    console.log(dropdown);
    if (dropdown.style["visibility"] != "visible"){
        dropdown.style["visibility"] = "visible";
    } else {
        dropdown.style["visibility"] = "hidden";
    }
}

function createAccountInfoDropdown(){
    acc_name = document.createElement("p");
    acc_name.innerText = "John Doe";
    acc_email =document.createElement("p");
    acc_email.innerText = "john.doe@gmail.com";
    logout = document.createElement("a");
    logout.href = "login.html";
    logout.innerText = "logout";

    container = document.getElementsByClassName("account-info-container")[0];
    dropdown = document.createElement("span");
    dropdown.setAttribute("id", "account-info");
    dropdown.appendChild(acc_name);
    dropdown.appendChild(acc_email);
    dropdown.appendChild(logout);
    container.appendChild(dropdown);

    return dropdown
}