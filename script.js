function upDate(previewPic) {
    console.log("Mouse over event triggered");
    console.log("Image source: " + previewPic.src);
    console.log("Image alt text: " + previewPic.alt);

    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerText = previewPic.alt;
}

function undo() {
    console.log("Mouse out event triggered");
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "";
    imageDiv.innerText = "Hover over an image below to display here.";
}
