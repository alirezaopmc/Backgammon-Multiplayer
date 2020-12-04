# Backgammon-Multiplayer
An advanced board game known as backgammon just implemented in javascript. Powered up by socket.io, p5js and more...

# Models
Models are object interfaces that will be passed by the emit function.
1. Player `#player`
```js
{
    id: String, // Server will assign a unique id to the player
    socketId: String, // Socket will assign a unique id to the player
    nickName: String // Player's handle
}
```

2. Game `#game`
```js
{
    id: String, // Server will assign a unique id to the game
    startDate: number, // The timestamp in milliseconds of the game's start
    playersId: list // A list of two strings. (Both playersIds)
}
```

3. New Game `#new-game`
```js
{
    gameType: String, // "host", "public", "private"
    playerId: String // The id of the player who is requesting
}
```

4. Game Action `#game-action`
```js
{
    from: Number, // The marble's index u want to move
    // Pass from = 24 means player wants to put it a marble from out
    to: Number, // The destination of the selected marble
}
```

# Game States
1. Normal
    * `Not other stats`
2. Out
    * `At least one marble is out`
3. End-Game
    * `All marbles in the last part of the board`
4. Locked
    * `No possible moves available while the no marble out`
    * `No possible positions available while at least one marble is out`

# Socket Interface (emit and model name]
1. Connection `(connection)`

2. New Game `(new-game)`

3. In Game `(game-action)`