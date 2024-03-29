import LinkedList from "../LinkedList";
import LinkedListNode from "../LinkedListNode";

describe('LinkedList',() => {
    it('should empty LinkedList', function () {
        const linkedList = new LinkedList()
        expect(linkedList.head).toBeNull()
        expect(linkedList.tail).toBeNull()
    })

    it('should append node to list', function () {
        const linkedList = new LinkedList();
        linkedList.append(1)
        const node1 = new LinkedListNode(1)
        expect(linkedList.head).toEqual(node1)
        expect(linkedList.tail).toEqual(node1)
        expect(linkedList.tail.next).toBeNull()

        linkedList.append(2)
        const node2 = new LinkedListNode(2)
        expect(linkedList.head.value).toEqual(node1.value)
        expect(linkedList.tail).toEqual(node2)
        expect(linkedList.tail.next).toBeNull()
        expect(linkedList.head.next).toEqual(linkedList.tail)

        linkedList.append(3)
        const node3 = new LinkedListNode(3)
        expect(linkedList.head.value).toBe(node1.value)
        expect(linkedList.head.next.value).toBe(node2.value)
        expect(linkedList.head.next.next.value).toBe(node3.value)

    });

    it('should prepend node to list', function () {
        const linkedList = new LinkedList()
        linkedList.append(1)
        linkedList.append(2)
        linkedList.append(3)

        linkedList.prepend(9)
        expect(linkedList.head.value).toBe(9)
        expect(linkedList.head.next.value).toBe(1)
        expect(linkedList.head.next.next.value).toBe(2)
        expect(linkedList.head.next.next.next.value).toBe(3)
        expect(linkedList.head.next.next.next.next).toBeNull()
    });

    it('should insert prepend node to list', function () {
        const linkedList = new LinkedList()
        linkedList.append(1)
        linkedList.append(2)
        linkedList.append(3)
        linkedList.insert(0,0)
        expect(linkedList.head.value).toBe(0)
        expect(linkedList.head.next.value).toBe(1)
        expect(linkedList.head.next.next.value).toBe(2)
        expect(linkedList.head.next.next.next.next).toBeNull()
    });

    it('should insert append node to list', function () {
        const linkedList = new LinkedList()
        linkedList.append(1)
        linkedList.append(2)
        linkedList.append(3)
        linkedList.insert(4,3)
        expect(linkedList.head.value).toBe(1)
        expect(linkedList.head.next.value).toBe(2)
        expect(linkedList.head.next.next.value).toBe(3)
        expect(linkedList.head.next.next.next.value).toBe(4)
        expect(linkedList.head.next.next.next.next).toBeNull()
    });

    it('should insert node to list', function () {
        const linkedList = new LinkedList()
        linkedList.append(1)
        linkedList.append(3)
        linkedList.append(5)
        linkedList.append(7)

        linkedList.insert(2,1)
        linkedList.insert(0,0)
        expect(linkedList.head.value).toBe(0)
        expect(linkedList.head.next.value).toBe(1)
        expect(linkedList.head.next.next.value).toBe(2)
        expect(linkedList.head.next.next.next.value).toBe(3)
        expect(linkedList.head.next.next.next.next.value).toBe(5)
        expect(linkedList.head.next.next.next.next.next.value).toBe(7)
        expect(linkedList.tail.value).toBe(7)

    });

    it('should insert over index to list', function () {
        const linkedList = new LinkedList()
        linkedList.append(1)
        linkedList.append(2)
        linkedList.append(3)
        linkedList.insert(4,100)
        expect(linkedList.head.value).toBe(1)
        expect(linkedList.head.next.value).toBe(2)
        expect(linkedList.head.next.next.value).toBe(3)
        expect(linkedList.head.next.next.next.value).toBe(4)
        expect(linkedList.tail.value).toBe(4)
    });

    it('should delete head to list', function () {
        const linkedList = new LinkedList()
        expect(linkedList.deleteHead()).toBeNull()
        linkedList.append(1)
        expect(linkedList.deleteHead().value).toBe(1)
        expect(linkedList.deleteHead()).toBeNull()
        linkedList.append(1)
        linkedList.append(2)
        linkedList.append(3)
        linkedList.deleteHead()
        expect(linkedList.head.value).toBe(2)
        expect(linkedList.head.next.value).toBe(3)
        expect(linkedList.tail.value).toBe(3)
        linkedList.deleteHead()
        linkedList.deleteHead()
        linkedList.deleteHead()
        linkedList.deleteHead()
        linkedList.deleteHead()
        expect(linkedList.head).toBeNull()
        expect(linkedList.tail).toBeNull()

    });

    it('should find node for list', function () {
        const linkedList = new LinkedList();
        expect(linkedList.find({value : 5})).toBeNull();

        linkedList.append(1).append(2).append(3);
        const findNode1 = linkedList.find({value : 2});
        expect(findNode1.value).toBe(2)

        const findNode2 = linkedList.find({cb : (value) => value === 2})
        const findNode3 = linkedList.find({cb : (value) => value === 3})

        expect(findNode2.value).toBe(2)
        expect(findNode3.value).toBe(3)

    });
})