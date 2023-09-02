import DoublyLinkedListNode from "../DoublyLinkedListNode";

describe('DoublyLinkedListNode',() => {
    it('should create list node', function () {
        const node = new DoublyLinkedListNode(2)
        expect(node.value).toBe(2)
        expect(node.next).toBeNull()
        expect(node.prev).toBeNull()
    });
    it('should create link nodes', function () {
        const node = new DoublyLinkedListNode(0)
        const node2 = new DoublyLinkedListNode(2)
        const node1 = new DoublyLinkedListNode(1)

        node.next = node1
        node1.prev = node
        node1.next = node2
        node2.prev = node1

        expect(node1.next).toEqual(node2)
        expect(node1.next.next).toBeNull()


        expect(node1.prev).toEqual(node)
        expect(node1.prev.prev).toBeNull()
        expect(node1.prev.next.value).toBe(1)
        expect(node1.prev.next.prev.value).toBe(0)
        expect(node1.prev.next.next.value).toBe(2)
    });
})