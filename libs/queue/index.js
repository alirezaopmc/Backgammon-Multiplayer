const Node = require('../node')

class Queue {
    /**
     * 
     */
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    /**
     * 
     * @param {*} value 
     */
    enqueue(value) {
        let newNode = new Node(value)

        if (this.size == 0) {
            this.head = this.tail = newNode
        } else {
            newNode.setNext(this.head)
            this.head.setPrev(newNode)
            this.head = newNode
        }

        this.size++
    }

    /**
     * @return {Object}
     */
    dequeue() {
        let removedNode

        if (this.size == 0) {
            console.log('Queue is empty!')
        } else if (this.size == 1) {
            removedNode = this.tail
            this.tail = this.head = null
            this.size--
            return removedNode.properties
        } else {
            removedNode = this.tail
            this.tail.getPrev().setNext(null)
            this.tail = this.tail.getPrev()
            this.size--
            return removedNode.properties
        }
    }

    /**
     * @return {Number}
     */
    length() {
        return this.size
    }

    /**
     * @return {Boolean}
     */
    empty() {
        return this.size == 0
    }
}