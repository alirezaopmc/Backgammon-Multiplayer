const BackGammon = require('../backgammon')
const Queue = require('../../libs/queue')

class MatchMaker {
    constructor(socket, io) {
        this.socket = socket
        this.io = io
        this.queue = new Queue()

        this.registerListeners()
    }



    // Socket IO Functions
    registerListeners() {
        this.newGameListener()
    }

    /**
     * New Game
     */
    newGameListener() {
        
    }
}

module.exports = MatchMaker