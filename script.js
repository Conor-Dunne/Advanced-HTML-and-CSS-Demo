const pic = document.getElementById("pic");
const resetBtn = document.getElementById("reset");
const rotateBtn = document.getElementById("rotate");
const scaleBtn = document.getElementById("scale");
const skewBtn = document.getElementById("skew");
const translateBtn = document.getElementById("translate");
const rotate3d = document.getElementById("rotate3d");
const scale3d = document.getElementById("scale3d");
const cssText = document.getElementById("cssText");

resetBtn.addEventListener("click", () => {
    pic.style.removeProperty("transform")
    cssText.textContent = "";

});



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

rotate3d.addEventListener("click", () => {
    const css = "rotate3d(0, 9, 4, 159deg)"
    pic.style.removeProperty("transform")
    pic.style.transform = css;
    cssText.textContent = css;
});

scale3d.addEventListener("click", () => {
    const css = "scale3d(0.6, 0.4, 1.7)"
    pic.style.removeProperty("transform")
    pic.style.transform = css;
    cssText.textContent = css;
});





// console.log(window.getComputedStyle(pic).cssText);