const pic = document.getElementById("pic");
const rotateBtn = document.getElementById("rotate");
const scaleBtn = document.getElementById("scale");



rotateBtn.addEventListener("click", () => pic.className = "rotate");
scaleBtn.addEventListener("click", () => pic.className = "scale");


