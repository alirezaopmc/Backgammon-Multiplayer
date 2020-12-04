

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