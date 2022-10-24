function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

elem = document.getElementById("custom-cursor")

const positionElement = (e) => {
    const mouseY = e.clientY;
    const mouseX = e.clientX;

    elem.style.top = mouseY - 35 + "px"
    elem.style.left = mouseX - 35 + "px"

}

const clickElement = (e) => {
    elem.style.transform = "rotate(30deg)"
    delay(400).then(() => elem.style.transform = "rotate(-10deg)");
    delay(500).then(() => addBreakGlassElement(e.clientX,e.clientY));
}

function addBreakGlassElement(x,y) {
    imageElement = document.createElement("img");
    imageElement.src = "break.png"
    console.log(x,y)
    divElement = document.createElement("div")
    divElement.id = "glass-break"
    divElement.style.top = y -60 + "px"
    divElement.style.left = x -100 + "px"
    divElement.appendChild(imageElement)

    document.body.appendChild(divElement)
}

window.addEventListener('mousemove', positionElement)

window.addEventListener('click', clickElement)