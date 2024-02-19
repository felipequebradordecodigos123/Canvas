canvas = document.getElementById("myCanvas")
color = "green"
ctx = canvas.getContext("2d")

ctx.beginPath()
ctx.strokeStyle = color
ctx.lineWidth = 2
ctx.arc(200, 200, 40, 0, 2 * Math.PI)
ctx.stroke()

canvas.addEventListener("mousedown", myMouseDown)
function myMouseDown(e) {
    mouseX = e.clientX - canvas.offsetLeft
    mouseY = e.clientY - canvas.offsetTop
    circle(mouseX, mouseY)
}

function circle(mouseX,mouseY) {
    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = 2
    ctx.arc(mouseX, mouseY, 40, 0, 2 * Math.PI)
    ctx.stroke()
}