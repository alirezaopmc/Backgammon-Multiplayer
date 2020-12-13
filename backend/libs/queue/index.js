const Node = require('../node')

/**
 * This is Queue class
 * 
 * head: pointer to last element of queue which will be removed after all nodes
 * tail: pointer to first element of queue which will be removed by dequeue
 * size: the number of nodes in queue
 */
class Queue {
    /**
     * Create an empty queue
     */
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    /**
     * Add a node to the end of the queue
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
     * Remove the first node which was added first of all
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
            return removedNode.data
        } else {
            removedNode = this.tail
            this.tail.getPrev().setNext(null)
            this.tail = this.tail.getPrev()
            this.size--
            return removedNode.data
        }
    }

    /**
     * Return the number node in the queue
     * @return {Number}
     */
    length() {
        return this.size
    }

    /**
     * Return the trueness of queue emptiness
     * @return {Boolean}
     */
    empty() {
        return this.size == 0
    }
}

module.exports = Queue