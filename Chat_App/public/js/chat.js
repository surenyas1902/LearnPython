const socket = io()

socket.on('countupdatedevent', (numCount) => {
    console.log('The Count has been updated', numCount)
})

document.querySelector("#increment").addEventListener("click", () => {
    console.log("Clicked")
    socket.emit('increment')
})