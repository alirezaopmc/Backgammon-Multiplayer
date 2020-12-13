class Player {

    constructor(nick, socket) {
        this.id = socket.id
        this.nick = nick
        this.socket = socket
        this.game = undefined
    }

    setGame(game) {
        this.game = game
    }

    getGame() {
        return this.game
    }

    dispose() {
        this.game.dispose()
    }

    hasGame() {
        return this.game != undefined
    }
}

module.exports = Player