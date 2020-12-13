const Stack = require('../../libs/stack')

/**
 * This is the main Game class in the backend
 */
class BackGammon {
    /**
     * 
     */
    constructor(host, code) {
        this.host = host
        this.guest = undefined
        this.code = code
        
        this.init()
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
}

module.exports = BackGammon