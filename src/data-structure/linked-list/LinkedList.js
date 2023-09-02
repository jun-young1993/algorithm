import LinkedListNode from "./LinkedListNode";

export default class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    prepend(value){

        const node = new LinkedListNode(value,this.head)
        this.head = node

        if(this.tail === null){
            this.tail = node
        }

        this.count ++;

        return this
    }

    append(value) {
        const node = new LinkedListNode(value)

        this.count ++;

        if(this.head === null){
            this.head = node
            this.tail = node
            return this
        }

        this.tail.next = node
        this.tail = node
        return this
    }

    insert(value, index){
        if(index === 0){
            this.prepend(value)
            return this
        }
        if(this.count === index){
            this.append(value)
            return this
        }

        const node = new LinkedListNode(value)
        let currentNode = this.head
        let count = 1;
        while(currentNode) {
            if (count === index) break

            currentNode = currentNode.next
            count++
        }

        if(currentNode){
            node.next = currentNode.next
            currentNode.next = node
        }else{
            this.append(value)
        }

        return this
    }

    deleteHead(){
        if(!this.head){
            return null;
        }

        const head = this.head;

        if(this.head.next){
            this.head = this.head.next;
        }else{
            this.head = null;
            this.tail = null;
        }

        return head;
    }

    find({
             value = undefined,
             cb =  undefined
    }){
        if(this.head === null){
            return null;
        }

        let currentNode = this.head;

        while(currentNode){

            if(cb && cb(currentNode.value)){
                return currentNode;
            }

            if(value !== undefined && value === currentNode.value){
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }
}