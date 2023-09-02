import HashTable from '../HashTable';
import LinkedList from "../../linked-list/LinkedList";

describe('hash-table', () => {
    it('should create to ', function () {
        const hashTable = new HashTable();
        const hashTable64 = new HashTable(64);
        const linkedList = new LinkedList();

        expect(hashTable.buckets.length).toBe(32);
        expect(hashTable64.buckets.length).toBe(64);

        for(let index=0; index<hashTable.buckets.length; index++){
            expect(hashTable.buckets[index]).toEqual(linkedList)
        }
    });

    it('should hash to key', function () {
        const hashTable = new HashTable()
        const key1 = 'ABC';
        const key2 = 1;
        const key3 = 2;
        expect(hashTable.hash(key1)).toBe(hashTable.hash(key1))
        expect(hashTable.hash(key2) !== hashTable.hash(key3)).toBeFalsy()
    });

    it('should set to keys ', function () {
        const hashTable = new HashTable();
        hashTable.set('A',1)
        hashTable.set('A',2)

        expect(hashTable.get('A')).toBe(2)
        hashTable.set('B','B')
        expect(hashTable.get('B')).toBe('B')

    });
})
