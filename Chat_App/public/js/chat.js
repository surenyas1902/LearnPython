const socket = io()

const $messageForm = document.querySelector("#mainForm")
const $messageFormInput = $messageForm.querySelector("input")
const $messageFormButton = $messageForm.querySelector("button")
const $sendLocationButton = document.querySelector("#sendLocation")

socket.on('welcomemessage', (message) => {
    console.log(message)
})

document.querySelector("#sendMessage").addEventListener("click", (e) => {
    e.preventDefault();
    $messageFormButton.setAttribute('disabled', 'disabled')
    
    const data = document.querySelector("#message");
    socket.emit('sendMessage', data.value, (error) => {
        $messageFormButton.removeAttribute('disabled')
        $messageFormInput.value = '';
        $messageFormInput.focus()
        if (error) {
            return console.log(error);
        }
        console.log("Message Delivered")
    });
})

$sendLocationButton.addEventListener("click", () => {
    
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported in this browser')
    }

    $sendLocationButton.setAttribute('disabled', 'disabled')

    navigator.geolocation.getCurrentPosition((position) => {
        
        console.log(position)
        socket.emit('sendLocation', {lat: position.coords.latitude, long: position.coords.longitude}, (msg) => {
            $sendLocationButton.removeAttribute('disabled')
            console.log(msg)
        })
    })
})

socket.on('receiveMessage', (message) => {
    console.log(message);
})