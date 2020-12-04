# Backgammon-Multiplayer
An advanced board game known as backgammon just implemented in javascript. Powered up by socket.io, p5js and more...

# Models
1. Player
{
    id: String, // Server will assign a unique id to the player
    socketId: String, // Socket will assign a unique id to the player
    nickName: String // Player's handle
}

2. Game
{
    id: String, // Server will assign a unique id to the game
    startDate: number, // The timestamp in milliseconds of the game's start
    playersId: list // A list of two strings. (Both playersIds)
}

# Socket Interface ('emit-name)
1. Connection ('connection')


2. New Game ('new-game')
{

}
    a. Host a game
    b. Join public
    c. Join private
