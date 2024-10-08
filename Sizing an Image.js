let imageElement = document.getElementById("image");
let imageWidthElement = document.getElementById("imageWidth");
let warning = document.getElementById("warningMessage");

let originalImageWidth = "200px";
imageElement.style.width = originalImageWidth;
let min = 300;
let org = 200;
let max = 100;
let big = "Too big. Decrease the size of the Image.";
let small = "Can't Visible. Increase the size of the Image.";
imageElement.style.width = org + "px";
imageWidthElement.textContent = org + "px";

function surya() {
    if (org >= min) {
        warning.textContent = big;
    } else {
        org = org + 5;
        let updatewidth = org + "px";
        warning.textContent = "";
        imageElement.style.width = updatewidth;
        imageWidthElement.textContent = updatewidth;
    }
}

function suri() {
    if (org <= max) {
        warning.textContent = small;
    } else {
        org = org - 5;
        let updatewidth = org + "px";
        warning.textContent = "";
        imageElement.style.width = updatewidth;
        imageWidthElement.textContent = updatewidth;
    }
}