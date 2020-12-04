var express = require('express')
var socket = require('socket.io')

var app = express()


var server = app.listen(3000, () => {
    console.log('Listening on port 3000')
})

app.use(express.static('public'))

// Socket setup
var io = socket(server)

io.on('connection', socket => {
    console.log('Made socket connection', socket.id)
})