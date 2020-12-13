const BackGammon = require('../backgammon')
const Queue = require('../../libs/queue')
const Player = require('../player')
const faker = require('faker')
const { v4: uuid } = require('uuid')
const Token = require('../../libs/token')

/**
 * This is the match maker class
 * 
 * Controls the activity of games and players
 */
class MatchMaker {
    /**
     * 
     * @param {*} socket: the socket.io main object
     * @param {*} io: the socket of our server
     */
    constructor(socket, io) {
        this.socket = socket
        this.io = io
        
        this.init()
    }
    
    /**
     * Initialize the match maker
     * Empty players
     * Register Events
     */
    init() {
        this.queue = new Queue()
        this.players = {}
        this.games = {}
        this.registerEvents()
    }

    // Utils
    removePlayer(socket) {
        let player = this.findPlayer(socket) 
        if(player) {
            if (player.hasGame()) {
                player.dispose()
            }
            delete this.players[socket.id]
        }
    }
    
    addPlayer(socket) {
        this.players[socket.id] = new Player(this.getRandomName(), socket)
    }

    addGame(game) {
        this.games[Token.get()] = new BackGammon()
    }

    /**
     * 
     * @param {*} socket
     * @return Player 
     */
    findPlayer(socket) {
        return socket.id in this.players ? this.players[socket.id] : undefined
    }

    getRandomName() {
        return faker.name.findName()
    }

    // Game utils
    createNewGame(socket, req) {
        let player = this.findPlayer(socket)
        let type = req.type

        if (player == undefined) {
            // Player not found
        }

        if (! this.validate(req)) {
            // Wrong Request
        }

        let hostMatch = () => {
            let hostedMatch = new BackGammon(socket.id)
            player.setGame(hostedMatch)
            this.queue.enqueue(hostedMatch)
            this.addGame(hostedMatch)
            // Waiting for the other players to join
        }

        let randomMatch = () => {
            if (this.queue.empty()) {
                hostMatch()
            } else {
                let randomMatch = this.queue.dequeue()
                player.setGame(randomMatch)
                randomMatch.join(player)
                this.addGame(randomMatch)
            }
        }

        let privateMatch = () => {
            let { gameId } = req
            

        }
    }

    validate(req) {
        
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

    // Events
    NewConnection() {
        this.io.on('connection', socket => {
            this.addPlayer(socket)
            this.PlayerRegisterEvents(socket)
        })
    }

    PlayerRegisterEvents(socket) {
        this.PlayerDisconnectEvent(socket)
        this.NewGameEvent(socket)
    }

    PlayerDisconnectEvent(socket) {
        socket.on('disconnect', () => {
            console.log(`[${this.findPlayer(socket).nick}] disconnected`)
            this.removePlayer(socket)
        })
    }

    NewGameEvent(socket) {
        socket.on('new-game', (req) => {
            console.log(`[${this.findPlayer(socket).nick}] has requested to make a new game.`)
            this.createNewGame(socket, req)
        })
    }



    
}

module.exports = MatchMaker