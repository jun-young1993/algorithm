import DoublyLinkedListNode from "./DoublyLinkedListNode";

export default class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.count = 0
    }

    prepend(value){
        const node = new DoublyLinkedListNode(value,this.head)

        if(this.head !== null){
            this.head.prev = node
        }

        this.head = node

        if(this.tail === null){
            this.tail = node
        }

        this.count++

        return this
    }

    append(value){
        const node = new DoublyLinkedListNode(value,null)

        if(this.tail === null){
            this.tail = node
            this.head = node
            this.count++
            return this
        }

        this.tail.next = node
        node.prev = this.tail
        this.tail = node
        this.count++

        return this

    }

    insert(value, index){

        if(index === 0){
            this.prepend(value)
            return this
        }
        if(index >= this.count){
            this.append(value)
            return this
        }

        const node = new DoublyLinkedListNode(value)
        let currentNode = this.head
        let count = 1
        while(currentNode){
            if(count === index) break

            currentNode = currentNode.next
            count++
        }

        if(currentNode){
            node.next = currentNode.next
            node.prev = currentNode
            currentNode.next.prev = node
            currentNode.next = node

        }else{
            this.append(value)
        }


    }
}