const pic = document.getElementById("pic");
const resetBtn = document.getElementById("reset");
const rotateBtn = document.getElementById("rotate");
const scaleBtn = document.getElementById("scale");
const skewBtn = document.getElementById("skew");
const translateBtn = document.getElementById("translate");
const rotate3d = document.getElementById("rotate3d");
const scale3d = document.getElementById("scale3d");
const keyframe = document.getElementById("keyframe");
const cssText = document.getElementById("cssText");

resetBtn.addEventListener("click", () => {
    pic.style.removeProperty("transform")
    cssText.textContent = "";

});



rotateBtn.addEventListener("click", () => {
    const css = "rotate(0.1turn)"
    pic.style.removeProperty("transform")
    pic.style.transform = css;
    cssText.textContent = `transform: ${css}`;
});
scaleBtn.addEventListener("click", () => {
    const css = "scale(2.5, 1.0)"
    pic.style.removeProperty("transform")
    pic.style.transform = css;
    cssText.textContent = `transform: ${css}`;
});

skewBtn.addEventListener("click", () => {
    const css = "skew(45deg, -0.2rad)"
    pic.style.removeProperty("transform")
    pic.style.transform = css;
    cssText.textContent = `transform: ${css}`;
});

translateBtn.addEventListener("click", () => {
    const css = "translate(100px, 150px)"
    pic.style.removeProperty("transform")
    pic.style.transform = css;
    cssText.textContent = `transform: ${css}`;
});

rotate3d.addEventListener("click", () => {
    const css = "rotate3d(0, 9, 4, 159deg)"
    pic.style.removeProperty("transform")
    pic.style.transform = css;
    cssText.textContent = `transform: ${css}`;
});

scale3d.addEventListener("click", () => {
    const css = "scale3d(0.6, 0.4, 1.7)"
    pic.style.removeProperty("transform")
    pic.style.transform = css;
    cssText.textContent = `transform: ${css}`;
});

keyframe.addEventListener("click", () => {
    const css = `}

    @keyframes rotateAnimation {
        0% {
            transform: rotate3d(1, 1, 0, 0deg);
        }
    
        50% {
            transform: rotate3d(1, 5, 0, 90deg);
        }
    
        100% {
            transform: rotate3d(1, 1, 0, 360deg);
        }
    }
    
    .revolving-image {
        width: 200px;
        height: 200px;
        background-image: url('your-image.jpg');
        background-size: cover;
        animation: rotateAnimation 5s linear infinite;
    `
    pic.style.removeProperty("transform")
    pic.classList.add("revolving-image")
    cssText.textContent = css;
});





// console.log(window.getComputedStyle(pic).cssText);