/**
 * Node class
 * 
 * data: stores the main property of the node
 * props: stores the other properties of the node including functions
 * prev: pointer to the previous node
 * next: pointer to the next node
 * 
 * !! Functions Properties !!
 * Very Important: All functions must use the props attribute of this node
 */

class Node {
    /**
     * Create a node with specified data
     * @param {*} data 
     */
    constructor(data) {
        this.data = data
        this.props = {}
        this.prev = null
        this.next = null
    }

    /**
     * Return the main property of the node (data)
     * @return {*}
     */
    get() {
        return this.data
    }

    /**
     * Change the main property of the node (data)
     * @param {*} data 
     */
    set(data) {
        this.data = data
    }

    /**
     * Get a specific property of the node by name (including functions)
     * @param {String} key
     */
    getProp(key) {
        return this.properties[key]
    }

    /**
     * Change a specific property of the node by name [key] (including functions)
     * @param {String} key 
     */
    setProp(key, value) {
        this.props[key] = value
    }

    /**
     * Return the previous node of the current node
     * @return {Node}
     */
    getPrev() {
        return this.prev
    }

    /**
     * Change the previous node of the current node
     * @param {Node} prev 
     */
    setPrev(prev) {
        this.next = prev
    }

    /**
     * Return the next node of the current node
     * @return {Node}
     */
    getNext() {
        return this.next
    }

    /**
     * Change the next node of the current node
     * @param {Node} prev 
     */
    setNext(next) {
        this.next = next
    }

    /**
     * Copy all properties of an other node to this node
     * @param {Node} otherNode 
     */
    copy(otherNode) {
        this.properties = otherNode.data
        this.prev = otherNode.prev
        this.next = otherNode.next
    }

    /**
     * Run a function in props if it exists by name [key]
     * @param {Function} functionName 
     */
    do(functionName) {
        let theFunction = properties[functionName]
        if (theFunction instanceof Function) {
            property(this.properties)
        } else {
            console.log(`${functionName} is not a function`)
        }
    }
}

module.exports = Node