const Config = require('../../config')

class Token {
    /**
     * 
     * @param {String} salt 
     */
    constructor(salt = Config.tokenSalt) {
        this.salt = salt
        this.tokens = {salt: true}
    }

    add(token) {
        this.tokens[token] = true
    }

    remove(token) {
        delete this.tokens[token]
    }

    get(cnt) {
        let token = this.salt.split('').sort(() => {
            return 0.5 - Math.random()
        }).slice(-cnt).join('')
        while(token in this.tokens) token = this.get()
        this.add(token)
        return token
    }
}

module.exports = new Token()