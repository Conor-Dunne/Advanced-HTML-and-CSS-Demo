const pic = document.getElementById("pic");
const rotateBtn = document.getElementById("rotate");
const scaleBtn = document.getElementById("scale");
const cssText = document.getElementById("cssText");



rotateBtn.addEventListener("click", () => {
    const css = "rotate(0.1turn)"
    pic.style.rotate = css;
    cssText.textContent = css;
});
scaleBtn.addEventListener("click", () => {
    const css = "scale(2.5, 1.0)"
    pic.style.transform = css;
    cssText.textContent = css;
});


// console.log(window.getComputedStyle(pic).cssText);