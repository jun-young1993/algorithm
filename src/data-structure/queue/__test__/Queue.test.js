
import Queue from '../Queue';
describe('queue', () => {
    it('should create queue', function () {
        const queue = new Queue()

        expect(queue.isEmpty()).toBeTruthy()
        expect(queue.peek()).toBeNull()

        queue.enqueue(1)
        expect(queue.isEmpty()).toBeFalsy()
        expect(queue.peek()).toBe(1)
    });

    it('should enqueue', function () {
        const queue = new Queue()
        queue.enqueue(1)
        expect(queue.peek()).toBe(1)
        queue.enqueue(2)
        expect(queue.peek()).toBe(1)

    });

    it('should dequeue', function () {
        const queue = new Queue()
        expect(queue.dequeue()).toBeNull()

        queue.enqueue(1)
        queue.enqueue(2)

        expect(queue.peek()).toBe(1)
        expect(queue.dequeue()).toBe(1)

        expect(queue.peek()).toBe(2)
        expect(queue.dequeue()).toBe(2)

        expect(queue.dequeue()).toBeNull()

    });
})
