function buttonVisibility(buttonID) {
    document.getElementById(buttonID).style.visibility = "visible";
}

//profile - show-hide info
var infoIndex = 0;
showHide(0);

function showHide(index) {
    var infoPages = document.getElementsByClassName("info");
    var size = infoPages.length;
    if (index < 0) {index = size-1}
    else if (index >= size) {index = 0}
    var i;
    for (i = 0; i < size; i++){
        infoPages[i].style.display = "none";
    }
    infoPages[i].style.display = "show";

}