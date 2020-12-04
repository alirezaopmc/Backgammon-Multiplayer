const Node = require('../node')

/**
 * This is stack class
 * 
 * top: pointer to the most top node
 * size: the number of nodes in stack
 */
class Stack {
    /**
     * Create an empty stack
     */
    constructor() {
        this.top = null
        this.size = 0
    }

    /**
     * Push a node with a specific value to the stack
     * 
     * @param {*} value 
     */
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

    /**
     * Remove the most top node and return
     */
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
            this.top = this.top.getPrev()
            this.size--
            return removedNode
        }

        return undefined
    }

    /**
     * Return the number of nodes in the stacl
     */
    length() {
        return this.size
    }

    /**
     * Return trueness of stack emptiness
     */
    empty() {
        return this.size == 0
    }
}

module.exports = Stack