// List 

class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    appendValue(value) {
        if (this.head === null) {
            this.head = value
        } else {
            let lastNode = this.getTail()
            lastNode.next = value
        }
    }

    prependValue(value) {
        if (this.head === null) {
            this.head = value
        } else {
            value.next = this.head
            this.head = value
        }
    }

    size() {
        let node = (this.head)
        let count = 0
        while (node) {
            count++
            node = node.next
        }
        return count 
    }

    getHead() {
        let headNode = this.head
        return headNode
    }

    getTail() {
        let node = this.head
        if (node) {
            while (node.next != null) {
                node = node.next
            }
        }
        return node
    }

    at(index) {
        let node = this.head
        let i = 0
        while (i < index) {
            node = node.next
            i++
        }
        return node
    }

    pop() {
        if (!this.head) {
            return
        }

        let prev = null
        let node = this.head 
        if (node) {
            while (node.next != null) {
                prev = node
                node = node.next
            }
            if (prev) 
            prev.next = null
        }
    }

    contains(value) {
        let node = this.head
        if (node) {
            if (node.data === value) {
                return true
            }

            while (node.next) {
                if (node.next.data === value) {
                    return true
                } 
                node = node.next
            }
        }
        return false
    }

    find(value) {
        let node = this.head
        let index = 0

        if (node) {
            if (node === value) {
                return index
            }

            while (node.next) {
                index = index + 1
                if (node.next === value) {
                    return index
                }
            }
        }
        return null
    }

    toString() {
        let string = ""
        let node = this.head

        if (!this.head) {
            return node
        }

        while (node) {
            let nodeString = `${node.data}`
            if (string === "") {
                string = string.concat('', `( ${nodeString} )`)
            } else {
                string = string.concat(' --> ', `( ${nodeString} )`)
            }
            node = node.next
        }
        return string
    }

}

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}


let node1 = new Node("one")
let node2 = new Node("two")
let node3 = new Node("three")
node1.next = node2
node2.next = node3

let myList = new LinkedList(node1)


// let node0 = new Node("zero")
// myList.prependValue(node0)

console.log(myList)