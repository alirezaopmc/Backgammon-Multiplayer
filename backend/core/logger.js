let logger = {
    newGameCreated: (socket) => {
        console.log(`+1 Match (Socket Id: ${socket.id})`)
    },

    gameQueueEmpty: () => {
        console.log(`Match Maker queue was empty so a new game will be created.`)
    },

    
}

module.exports = logger