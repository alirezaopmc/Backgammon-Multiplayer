const app = require('express')();
const cors = require('cors');

app.use(cors())
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: "http://127.0.0.1:5500",
    methods: ["GET", "POST"],
    credentials: true
})
const MatchMaker = require('./core/match-maker')

io.on('connection', socket => {
    console.log('Made socket connection', socket.id)
})

server.listen(3000, () => {
    console.log("Server is running on port 3000")
})

// MatchMaker setup
//const matcher = new MatchMaker(socket, io)