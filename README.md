# Backgammon-Multiplayer
An advanced board game known as backgammon just implemented in javascript. Powered up by socket.io, p5js and more...

# CTS Emit Models

* `#connection`
```js
// Nothing
```

* `#change-nick`
```js
{
    nick: String // 1 <= Length <= 10
}
```

* `#new-game`
```js
{
    type: String // types [HOST, RAND, PRIV]
    code: String // If private, the target code
}
```

* `#move`
```js
{
    fr: Integer // From
    to: Integer // To
}
```

* `#disconnect`
```js
{
    // Nothing
}
```


# STC Emit Models

* `#new-game-response`
```js
{
    // If OKAY
        // Type == HOST
        type: "HOST"
            // If a new game created successfully 
                msg: String // Success message
            // Else
                err: String // Error message

        // Type == RAND
        type: "RAND"
            // If a game was found
            msg: String // Game found

            // If no game found and a new game was created
            msg: String // No game found but a new game was created

            // If no game was found and can't create a game
            err: String // Error message

        // Type == PRIV
        type: "PRIV"
            

    // If NOKAY (It happens when emit is in wrong format)
    err: String // Failure message
}
```