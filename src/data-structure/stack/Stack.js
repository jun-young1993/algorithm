import LinkedList from "../linked-list/LinkedList";

export default class Stack {
    constructor() {
        this.linkedList = new LinkedList()
    }

    isEmpty(){
        return !this.linkedList.head;
    }

    peek(){
        if(this.isEmpty()){
            return null;
        }

        return this.linkedList.head.value;
    }

    push(value){
        this.linkedList.prepend(value);
    }

    pop(){
        const head = this.linkedList.deleteHead();
        return head ? head.value : null;
    }
}
