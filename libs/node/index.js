class Node {
    /**
     * 
     * @param {*} data 
     */
    constructor(data) {
        this.data = data
        this.props = {}
        this.prev = null
        this.next = null
    }

    /**
     * @return {*}
     */
    get() {
        return this.data
    }

    /**
     * 
     * @param {*} data 
     */
    set(data) {
        this.data = data
    }

    /**
     * 
     * @param {String} key
     */
    getProp(key) {
        return this.properties[key]
    }

    /**
     * 
     * @param {String} key 
     */
    setProp(key, value) {
        this.props[key] = value
    }

    /**
     * @return {Node}
     */
    getPrev() {
        return this.prev
    }

    /**
     * 
     * @param {Node} prev 
     */
    setPrev(prev) {
        this.next = prev
    }

    /**
     * @return {Node}
     */
    getNext() {
        return this.next
    }

    /**
     * 
     * @param {Node} prev 
     */
    setNext(next) {
        this.next = next
    }

    /**
     * 
     * @param {Node} otherNode 
     */
    copy(otherNode) {
        this.properties = otherNode.data
        this.prev = otherNode.prev
        this.next = otherNode.next
    }

    /**
     * 
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