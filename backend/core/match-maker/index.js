const BackGammon = require('../backgammon')
const Queue = require('../../libs/queue')
const Player = require('../player')
const faker = require('faker')

class MatchMaker {
    constructor(socket, io) {
        this.socket = socket
        this.io = io
        
        this.init()
    }
    
    init() {
        this.queue = new Queue()
        this.players = {}
        this.registerEvents()
    }

    newGame(req) {
        let gameType = req.gameType
        let playerId = req.playerId

        if (gameType == 'host') {
            
        }

        if (gameType == 'public') {

        }

        if (gameType == 'private') {

        }
    }

    createRoom(host) {

    }

    getRandomName() {
        return faker.name.findName()
    }


    // Socket IO Functions
    /**
     * Register Events
     * 
     * NewGameEvent
     * PlayerJoinEvent
     */
    registerEvents() {
        this.NewConnection()
    }

    // Player specific utils
    NewConnection() {
        this.io.on('connection', socket => {
            this.addPlayer(socket)
            this.handlePlayer(socket)
        })
    }

    addPlayer(socket) {
        this.players[socket.id] = new Player(socket.id, this.getRandomName(), socket)
    }

    removePlayer(socket) {
        delete this.players[socket.id]
    }

    handlePlayer(socket) {
        socket.on('disconnect', () => {
            this.removePlayer(socket)
        })
    }



    
}

module.exports = MatchMaker