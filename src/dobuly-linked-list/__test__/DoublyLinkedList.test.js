import DoublyLinkedList from "../DoublyLinkedList";

describe('DoublyLinkedList',() => {
    it('should create DoublyLinkedList', function () {
        const doublyLinkedList = new DoublyLinkedList()
        expect(doublyLinkedList.head).toBeNull()
        expect(doublyLinkedList.tail).toBeNull()
    });

    it('should append to list', function () {
        const doublyLinkedList = new DoublyLinkedList()

        doublyLinkedList.append(1)
        doublyLinkedList.append(2)
        doublyLinkedList.append(3)

        expect(doublyLinkedList.head.value).toBe(1)
        expect(doublyLinkedList.head.next.value).toBe(2)
        expect(doublyLinkedList.head.next.next.value).toBe(3)

        expect(doublyLinkedList.tail.value).toBe(3)
        expect(doublyLinkedList.tail.prev.value).toBe(2)
        expect(doublyLinkedList.tail.prev.next.value).toBe(3)
        expect(doublyLinkedList.tail.prev.prev.value).toBe(1)
        expect(doublyLinkedList.tail.prev.prev.next.value).toBe(2)

    });

    it('should prepend to list', function () {
        const doublyLinkedList = new DoublyLinkedList()
        doublyLinkedList.append(2)
        doublyLinkedList.append(3)
        doublyLinkedList.append(4)
        expect(doublyLinkedList.head.value).toBe(2)
        doublyLinkedList.prepend(1)
        expect(doublyLinkedList.head.value).toBe(1)
        expect(doublyLinkedList.head.next.value).toBe(2)
        doublyLinkedList.prepend(0)
        expect(doublyLinkedList.head.value).toBe(0)
        expect(doublyLinkedList.head.next.value).toBe(1)
    });

    it('should insert prepend to list', function () {
        const doublyLinkedList = new DoublyLinkedList()
        doublyLinkedList.append(2)
        doublyLinkedList.append(3)
        doublyLinkedList.append(4)
        doublyLinkedList.insert(1,0)
        expect(doublyLinkedList.head.value).toBe(1)
        expect(doublyLinkedList.head.next.value).toBe(2)
    });

    it('should insert append to list', function () {
        const doublyLinkedList = new DoublyLinkedList()
        doublyLinkedList.append(1)
        doublyLinkedList.append(2)
        doublyLinkedList.append(3)
        doublyLinkedList.insert(4,3)
        doublyLinkedList.insert(5,100)
        expect(doublyLinkedList.head.value).toBe(1)
        expect(doublyLinkedList.head.next.value).toBe(2)
        expect(doublyLinkedList.head.next.next.value).toBe(3)
        expect(doublyLinkedList.head.next.next.next.value).toBe(4)
        expect(doublyLinkedList.head.next.next.next.next.value).toBe(5)
    });

    it('should insert to list', function () {
        const doublyLinkedList = new DoublyLinkedList()
        doublyLinkedList.append(1)
        doublyLinkedList.append(2)
        doublyLinkedList.append(4)
        doublyLinkedList.append(5)
        doublyLinkedList.insert(3,2)
        expect(doublyLinkedList.head.value).toBe(1)
        expect(doublyLinkedList.head.next.value).toBe(2)
        expect(doublyLinkedList.head.next.next.value).toBe(3)
        expect(doublyLinkedList.head.next.next.next.value).toBe(4)
        expect(doublyLinkedList.head.next.next.next.next.value).toBe(5)
        expect(doublyLinkedList.head.next.next.next.next.prev.value).toBe(4)
        expect(doublyLinkedList.head.next.next.next.next.prev.prev.value).toBe(3)
        expect(doublyLinkedList.head.next.next.next.next.prev.prev.prev.value).toBe(2)
        expect(doublyLinkedList.head.next.next.next.next.prev.prev.prev.prev.value).toBe(1)
    });
})