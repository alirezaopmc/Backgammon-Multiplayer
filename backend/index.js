const express = require('express')
const socket = require('socket.io')
const MatchMaker = require('./core/match-maker')

const app = express()


const server = app.listen(3000, () => {
    console.log('Listening on port 3000')
})

app.use(express.static('public'))

// Socket setup
const io = socket(server)

// io.on('connection', socket => {
//     console.log('Made socket connection', socket.id)
// })



// MatchMaker setup
const matcher = new MatchMaker(socket, io)