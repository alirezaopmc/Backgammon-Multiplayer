const Stack = require('../../libs/stack')
const Player = require('../player')

/**
 * This is the main Game class in the backend
 */
class BackGammon {
    /**
     * 
     * @param {Player} host 
     * @param {*} code 
     */
    constructor(host, code) {
        this.host = host
        this.guest = undefined
        this.code = code
        
        this.init()
    }

    /**
     * @return {Player}
     */
    getHost() {
        return this.host
    }

    /**
     * @return {Player}
     */
    getGuest() {
        return this.guest
    }
    
    init() {
        this.cols = new Stack()
        this.wait()
    }

    join(guest) {
        this.guest = guest
        this.guest.setGame(this);
        this.start()
    }

    wait() {
        this.state = 'waiting'
    }

    start() {
        this.state = 'starting'
    }

    dice() {
        return Math.floor(Math.random() * 6)
    }

    dispose() {
        if (this.host) this.host.disposeGame()
    }

    /**
     * 
     * @param {*} i 
     * @param {*} j 
     * @return {Boolean}
     */
    move(i, j) {
        if (this.validateMove(i, j)) {

        } else {
            // Not possible move !
        }
    }

    /**
     * 
     * @param {*} i 
     * @param {*} j 
     * @return {Boolean}
     */
    validateMove(i, j) {
        return true
    }
}

module.exports = BackGammon