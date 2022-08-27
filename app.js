const likeCount = document.getElementsByClassName("like-count");
const hearts = document.getElementsByClassName("hearts")
let imgEl;

window.onclick = function (e) {
    imgEl = e.target;
    console.log(imgEl, imgEl.src)
    dynamic()
}
function dynamic() {
    for (let i = 0; i < hearts.length; i++) {
        console.log(i, hearts[i] === imgEl, hearts[i].src, imgEl.src)
        if (hearts[i] === imgEl) {
            if (imgEl.src.includes("icon")) {
                console.log(imgEl.src.includes("icon"))
                likeCount[i].innerText = Number(likeCount[i].innerText) + 1
                hearts[i].src = "images/hearts.png"

            }
            else if (imgEl.src.includes("hearts")) {
                console.log(imgEl.src.includes("hearts"))
                likeCount[i].innerText = Number(likeCount[i].innerText) - 1
                hearts[i].src = "images/icon-heart.png"
            }
        }

    }
}



// heart.addEventListener("click", function () {
//     for (let i = 0; i < likeVan.length; i++) {

//     }
// })



// heart.addEventListener("click", function () {
//     if (heart.src === "file:///Users/deeti/Desktop/Scrimba/oldagram/images/icon-heart.png") {
//         let likes = Number(likeVan.textContent)
//         likes += 1
//         likeVan.innerText = likes;
//         console.log(likes, likeVan.innerText)
//         heart.src = "images/hearts.png"
//     }
//     else if (heart.src === 'file:///Users/deeti/Desktop/Scrimba/oldagram/images/hearts.png') {
//         let likes = Number(likeVan.textContent)
//         likes -= 1
//         likeVan.innerText = likes;
//         heart.src = "images/icon-heart.png"
//     }


// })