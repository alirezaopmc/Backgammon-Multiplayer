const BackGammon = require('../backgammon')

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

    /**
     * @return {BackGammon}
     */
    getGame() {
        return this.game
    }

    setNick(nick) {
        this.nick = nick
    }

    dispose() {
        this.game.dispose()
    }

    hasGame() {
        return this.game != undefined
    }
}

module.exports = Player