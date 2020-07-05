const socket = io()

const $messageForm = document.querySelector("#mainForm")
const $messageFormInput = $messageForm.querySelector("input")
const $messageFormButton = $messageForm.querySelector("button")
const $sendLocationButton = document.querySelector("#sendLocation")
const $messages = document.querySelector("#messages")

//Templates
const $messageTemplate = document.querySelector("#message-template").innerHTML;
const $locationTemplate = document.querySelector("#location-template").innerHTML;

socket.on('welcomemessage', (message) => {
    console.log(message);
    const html = Mustache.render($messageTemplate, {
        message: message.text,
        createdAt: moment(message.createdAt).format('h:mm a')
    })
    $messages.insertAdjacentHTML('beforeend', html)
})

socket.on('locationMessage', (location) => {
    const html = Mustache.render($locationTemplate, {
        url: location
    })
    $messages.insertAdjacentHTML('beforeend', html)
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
        console.log("Message Delivered");
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