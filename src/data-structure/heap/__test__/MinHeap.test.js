import MinHeap from '../MinHeap';

describe('MinHeap', () => {
    it('should create to MinHeap', function () {
        const minHeap = new MinHeap();
        expect(minHeap.peek()).toBeNull();
        expect(minHeap.isEmpty()).toBeTruthy();
    });



    it('should add items to min heap', function () {
        const minHeap = new MinHeap();
        minHeap.add(1)
        expect(minHeap.heapContainer.join(',')).toBe('1')

        minHeap.add(2)
        expect(minHeap.heapContainer.join(',')).toBe('1,2')

        minHeap.add(3)
        expect(minHeap.heapContainer.join(',')).toBe('1,2,3')

        minHeap.add(4)
        expect(minHeap.heapContainer.join(',')).toBe('1,2,3,4')

        minHeap.add(5)
        expect(minHeap.heapContainer.join(',')).toBe('1,2,3,4,5')

        minHeap.add(2)
        expect(minHeap.heapContainer.join(',')).toBe('1,2,2,4,5,3')
        expect(minHeap.peek()).toBe(1);

        minHeap.add(0)
        expect(minHeap.heapContainer.join(',')).toBe('0,2,1,4,5,3,2')
        expect(minHeap.peek()).toBe(0);


    });

    it('should find items to index', function () {
        const minHeap = new MinHeap();
        minHeap.add(1)
        minHeap.add(2)
        minHeap.add(3)
        minHeap.add(1)
        expect(minHeap.heapContainer.join(',')).toBe('1,1,3,2')

        expect(minHeap.find(1)).toEqual([0,1])
    });

    it('should remove last item', function () {
        const minHeap = new MinHeap();
        minHeap.add(1)
        minHeap.add(2)
        minHeap.add(3)
        minHeap.add(4)
        minHeap.add(5)
        expect(minHeap.heapContainer.join(',')).toBe('1,2,3,4,5')
        minHeap.remove(5)
        expect(minHeap.heapContainer.join(',')).toBe('1,2,3,4')

        minHeap.remove(4)
        expect(minHeap.heapContainer.join(',')).toBe('1,2,3')

        minHeap.remove(3)
        expect(minHeap.heapContainer.join(',')).toBe('1,2')
    });

    it('should remove item', function () {
        const minHeap = new MinHeap()
        minHeap.add(1)
        minHeap.add(2)
        minHeap.add(3)
        minHeap.add(4)
        minHeap.add(5)


        minHeap.remove(3)
        expect(minHeap.heapContainer.join(',')).toBe('1,2,5,4')
    });
})
