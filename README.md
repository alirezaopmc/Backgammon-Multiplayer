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
    i: Integer // From
    j: Integer // To
}
```

* `#disconnect`
```js
{
    // Nothing
}
```


# STC Emit Models

* Global Response Model: Game State Object
```js
{
    status: "success",
    type: "public, private",
    state: "pending, beginning, in-game, end-game, game-over, no-game, no-connection",
    cols: [ [0 or 1, ...] * 24 ],
    host: "nick",
    guest: "nick",
    dice: {host, guest},
    turn: 0 or 1,
}
```

* Errors
```js
{
    status: "error",
    message: "The request does not meet the requirements"
}
```