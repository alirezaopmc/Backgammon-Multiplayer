const Node = require('../node')

class Queue {
    constructor() {
        this.top = null
        this.size = 0
    }

    push(value) {
        let newNode = new Node(value)

        if (this.size == 0) {
            this.top = newNode
        } else {
            newNode.setPrev(this.top)
            this.top.setNext(newNode)
            this.top = newNode
        }

        this.size++
    }

    pop() {
        let removedNode

        if (this.size == 0) {
            console.log('Stack is empty!')
        } else if (this.size == 1) {
            removedNode = this.top
            this.top = null
            this.size--
            return removedNode
        } else {
            removedNode = this.top
            this.top.getPrev().setNext(null)
            this.size--
            return removedNode
        }
    }

    length() {
        return this.size
    }

    empty() {
        return this.size == 0
    }
}

module.exports = Stack