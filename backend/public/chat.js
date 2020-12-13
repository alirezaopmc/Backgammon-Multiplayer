var socket = io.connect('http://localhost:3000')

socket.on('message', (msg) => {
    console.log(msg)
})

let createNewGame = () => {
    socket.emit('new-game', {gameType: "host"})
}