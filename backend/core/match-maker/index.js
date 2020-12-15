const BackGammon = require('../backgammon')
const Queue = require('../../libs/queue')
const Player = require('../player')
const faker = require('faker')
const { v4: uuid } = require('uuid')
const Token = require('../../libs/token')
const LOG = require('../logger')

// Comments 88 => TODO
// Comments 66 => HOPE

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
    /**
     * Remove a player
     * Dispose the game if available
     * Delete player from players container
     * @param {*} socket 
     */
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
     * @return {Player}
     */
    findPlayer(socket) {
        return socket.id in this.players ? this.players[socket.id] : undefined
    }

    /**
     * Find game by id
     * @param {String} gameId 
     * @return {BackGammon}
     */
    findGame(code) {
        return gameId in this.games ? this.games[gameId] : undefined
    }

    getRandomName() {
        return faker.name.findName()
    }

    /**
     * Game utils
     */

     /**
      * 
      * @param {*} socket 
      * @param {*} req 
      */
    createNewGame(socket, req) {
        let player = this.findPlayer(socket)
        let type = req.type

        if (player == undefined) {
            // Player not found 88
        }

        /**
         * Make a new game
         */
        let hostMatch = () => {
            let hostedMatch = new BackGammon(socket.id)
            player.setGame(hostedMatch)
            this.queue.enqueue(hostedMatch)
            this.addGame(hostedMatch)
            // Waiting for the other players to join
        }

        /**
         * Find a random game in queue or make a new one if it doesn't exist'
         */
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

        /**
         * Join a game with code
         */
        let privateMatch = () => {
            let { code } = req
            
            if (this.findGame(code) == undefined) {
                // No match 88
            }

            // Join the match 88 

        }

        if (type == "HOST") {
            hostMatch()
            LOG.newGameCreated(socket)
        }

        if (type == "RAND") {
            LOG.gameQueueEmpty()
            randomMatch()
            LOG.newGameCreated(socket)
        }

        if (type == "PRIV") {
            // Private Stuff 88
        }
    }

    changeNick(socket, req) {
        let { nick } = req

        // The nick can not be changed during a game 66
        this.findPlayer(socket).setNick(nick)
    }

    move(socket, req) {
        let { i, j } = req
        let game = this.findPlayer(socket).getGame()

        if (! game.move(i, j)) {
            socket.emit('wrong-move')
        }

        // Otherwise the game state will be updated and
        // there is no need to emit
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
        this.ChangeNickEvent(socket)
        this.MoveEvent(socket)
    }

    PlayerDisconnectEvent(socket) {
        socket.on('disconnect', () => {
            console.log(`[${this.findPlayer(socket).nick}] disconnected`)
            this.removePlayer(socket)
        })
    }

    NewGameEvent(socket) {
        socket.on('new-game', (req) => {
            this.createNewGame(socket, req)
        })
    }

    ChangeNickEvent(socket) {
        socket.on('change-nick', (req) => {
            this.changeNick(socket, req)
        })
    }

    MoveEvent(socket) {
        socket.on('move', (req) => {
            this.move(socket, req)
        })
    }

    
}

module.exports = MatchMaker