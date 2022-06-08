var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openfull(pic) {
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

function closefull() {
    fullImgBox.style.display = "none";
}