const pic = document.getElementById("pic");
const rotateBtn = document.getElementById("rotate");
const scaleBtn = document.getElementById("scale");
const skewBtn = document.getElementById("skew");
const translateBtn = document.getElementById("translate");
const cssText = document.getElementById("cssText");



rotateBtn.addEventListener("click", () => {
    const css = "rotate(0.1turn)"
    pic.style.removeProperty("transform")
    pic.style.transform = css;
    cssText.textContent = css;
});
scaleBtn.addEventListener("click", () => {
    const css = "scale(2.5, 1.0)"
    pic.style.removeProperty("transform")
    pic.style.transform = css;
    cssText.textContent = css;
});

skewBtn.addEventListener("click", () => {
    const css = "skew(45deg, -0.2rad)"
    pic.style.removeProperty("transform")
    pic.style.transform = css;
    cssText.textContent = css;
});

translateBtn.addEventListener("click", () => {
    const css = "translate(100px, 150px)"
    pic.style.removeProperty("transform")
    pic.style.transform = css;
    cssText.textContent = css;
});





// console.log(window.getComputedStyle(pic).cssText);