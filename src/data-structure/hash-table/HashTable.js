import LinkedList from "../linked-list/LinkedList";

const defaultHashTableSize = 32
export default class HashTable {
    constructor(hashTableSize = defaultHashTableSize) {
        this.buckets = Array(hashTableSize).fill(new LinkedList());
        this.keys = {};
    }

    hash(key){
        const hash = Array.from(key).reduce((hashAccumulator,keySymbol) => {
            return hashAccumulator+keySymbol.charCodeAt(0);
        },0);
        return hash%this.buckets.length;
    }

    set(key, value){
        const hash = this.hash(key);

        this.keys[key] = hash;
        const bucketLinkedList = this.buckets[hash];
        const node = bucketLinkedList.find({cb: (nodeValue) => nodeValue.key === key});
        if(node === null){
            bucketLinkedList.append({key, value});
        }else{
            node.value.value = value;
        }
    }

    get(key){
        const bucketLinkedList = this.buckets[this.hash(key)];
        const node = bucketLinkedList.find({cb: (nodeValue) => nodeValue.key === key});

        return node ? node.value.value : undefined;
    }
}
