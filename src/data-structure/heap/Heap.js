export default class Heap {
    constructor() {
        if(new.target === Heap){
            throw new TypeError('cannot construct Heap insatnce directly')
        }

        this.heapContainer = [];
    }

    peek(){
        if(this.heapContainer.length === 0){
            return null;
        }

        return this.heapContainer[0];
    }

    isEmpty(){
        return this.heapContainer.length === 0;
    }

    add(item){
        this.heapContainer.push(item);
        this.heapifyUp();
        return this;
    }

    hasParent(childIndex){
        return this.getParentIndex(childIndex) >= 0;
    }

    parent(childIndex){
        return this.heapContainer[this.getParentIndex(childIndex)];
    }

    getParentIndex(childIndex){
        return Math.floor((childIndex - 1)/2)
    }

    pairIsInCorrectOrder(firstElement, secondElement) {
        throw new Error(`
      You have to implement heap pair comparision method
      for ${firstElement} and ${secondElement} values.
    `);
    }

    swap(indexOne, indexTwo) {
        const tmp = this.heapContainer[indexTwo];
        this.heapContainer[indexTwo] = this.heapContainer[indexOne];
        this.heapContainer[indexOne] = tmp;
    }

    remove(item){
        const removeItemIndexes = this.find(item);
        for(let index=0; index<removeItemIndexes.length; index += 1){
            const removeItemIndex = removeItemIndexes[index];
            if(removeItemIndex === (this.heapContainer.length - 1)){
                this.heapContainer.pop();
            }else{
                this.heapContainer[removeItemIndex] = this.heapContainer.pop();
                const parentItem = this.parent(removeItemIndex)

                if(
                    this.hasLeftChild(removeItemIndex)
                    && (
                        !parentItem
                        || this.pairIsInCorrectOrder(parentItem, this.heapContainer[removeItemIndex])
                    )
                ){
                    this.heapifyDown(removeItemIndex);
                }else{
                    this.heapifyUp(removeItemIndex);
                }
            }
        }

        return this;
    }

    heapifyDown(customStartIndex= 0){
        let currentIndex = customStartIndex;
        let nextIndex = null;

        while(this.hasLeftChild(currentIndex)){

            if(
                this.hasRightChild(currentIndex)
                && this.pairIsInCorrectOrder(this.rightChild(currentIndex), this.leftChild(currentIndex))
            ){
                nextIndex = this.getRightChildIndex(currentIndex);
            } else {
                nextIndex = this.getLeftChildIndex(currentIndex);
            }
            if (this.pairIsInCorrectOrder(
                this.heapContainer[currentIndex],
                this.heapContainer[nextIndex],
            )) {
                break;
            }

            this.swap(currentIndex, nextIndex);
            currentIndex += 1;
        }
    }

    /**
     * @param {number} parentIndex
     * @return {number}
     */
    getLeftChildIndex(parentIndex) {
        return (2 * parentIndex) + 1;
    }


    /**
     * @param {number} parentIndex
     * @return {number}
     */
    getRightChildIndex(parentIndex) {
        return (2 * parentIndex) + 2;
    }

    hasLeftChild(parentIndex) {
        return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
    }

    hasRightChild(parentIndex){
        return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
    }

    leftChild(parentIndex){
        return this.heapContainer[this.getLeftChildIndex(parentIndex)]
    }

    rightChild(parentIndex){
        return this.heapContainer[this.getrightChildIndex(parentIndex)]
    }

    find(item){
        let foundItems = [];
        const containerSize = this.heapContainer.length;
        for(let containerIndex=0; containerIndex<containerSize; containerIndex += 1){
            if(item === this.heapContainer[containerIndex]){
                foundItems.push(containerIndex)
            }
        }



        return foundItems;
    }

    heapifyUp(customStartIndex){
        let currentIndex = customStartIndex || this.heapContainer.length - 1;

        while(
            this.hasParent(currentIndex)
            && !this.pairIsInCorrectOrder(this.parent(currentIndex),this.heapContainer[currentIndex])
        ){
            this.swap(currentIndex, this.getParentIndex(currentIndex))
            currentIndex = this.getParentIndex(currentIndex);
        }
    }
}
