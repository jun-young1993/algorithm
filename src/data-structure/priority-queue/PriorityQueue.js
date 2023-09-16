import MinHeap from "../heap/MinHeap";

export default class PriorityQueue extends MinHeap{
    constructor() {

        super()
        this.priorities = new Map();
    }

    add(item, priority = 0) {
        this.priorities.set(item, priority);
        super.add(item);
        return this;
    }

    pairIsInCorrectOrder(firstElement, secondElement) {
        return this.priorities.get(firstElement) < this.priorities.get(secondElement) || this.priorities.get(firstElement) === this.priorities.get(secondElement);
    }

}
