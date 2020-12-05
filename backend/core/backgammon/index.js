const Stack = require('../../libs/stack')

/**
 * This is the main Game class in the backend
 */
class BackGammon {
    /**
     * 
     */
    constructor(host, id) {
        this.host = host
        this.guest = undefined

        this.id = id
        this.wait()

        this.init()
    }

    init() {
        this.cols = new Stack()
    }

    join(guest) {
        this.guest = guest
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


}