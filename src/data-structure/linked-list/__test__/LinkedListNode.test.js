import LinkedListNode from "../LinkedListNode";

describe('LinkedListNode',() => {
    it('should create list node', function () {
        const node = new LinkedListNode(2)
        expect(node.value).toBe(2)
        expect(node.next).toBeNull();
    })

    it('should create list node with object value', function () {
        const nodeValue = {value : 4 , key : 10}
        const node = new LinkedListNode(nodeValue)
        expect(node.value.value).toBe(4)
        expect(node.value.key).toBe(10)
        expect(node.next).toBeNull();
    })

    it('should link nodes', function () {

        const node2 = new LinkedListNode(2)
        const node = new LinkedListNode(3,node2)

        expect(node.value).toBe(3)
        expect(node.next).toEqual(node2)
        expect(node.next.value).toEqual(2)
        expect(node.next.next).toBeNull();
    })

    it('should convert node value', function () {

        const node2 = new LinkedListNode(2)
        const node = new LinkedListNode(3,node2)

        expect(node.value).toBe(3)
        node.value = 4
        expect(node.value).toBe(4)
        expect(node.next).toEqual(node2)
        expect(node.next.value).toEqual(2)
        node.next.value = 5
        expect(node.next.value).toEqual(5)
        expect(node.next.next).toBeNull();
        node.next = null;
        expect(node.next).toBeNull();
    })
})