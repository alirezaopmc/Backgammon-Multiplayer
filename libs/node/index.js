class Node {
    /**
     * 
     * @param {*} value 
     */
    constructor(value) {
        this.properties = {value: value}
        this.prev = null
        this.next = null
    }

    /**
     * @return {*}
     */
    getValue() {
        return this.properties.value
    }

    /**
     * 
     * @param {*} value 
     */
    setValue(value) {
        this.properties.value = value
    }

    /**
     * 
     * @param {String} key 
     * @param {*} value 
     * @return {*}
     */
    getData(key) {
        return this.properties[key]
    }

    /**
     * 
     * @param {String} key 
     * @param {*} value 
     */
    setData(key, value) {
        this.properties[key] = value
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