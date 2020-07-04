const socket = io()

socket.on('welcomemessage', (message) => {
    console.log(message)
})

document.querySelector("#sendMessage").addEventListener("click", (e) => {
    e.preventDefault();
    const data = document.querySelector("#message");
    socket.emit('sendMessage', data.value);
    data.value = "";

})

document.querySelector("#sendLocation").addEventListener("click", () => {
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported in this browser')
    }
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)
    })
})

socket.on('receiveMessage', (message) => {
    console.log(message);
})