
import Stack from '../Stack';
describe('stack', () => {
    it('should create to Stack', function () {
        const stack = new Stack();

        expect(stack.isEmpty()).toBeTruthy()
        expect(stack.peek()).toBeNull()

    });

    it('should push to Stack', function () {
        const stack = new Stack()
        stack.push(1)
        expect(stack.peek()).toBe(1)
        stack.push(2)
        expect(stack.peek()).toBe(2)
        stack.push(3)
        stack.push(4)
        expect(stack.peek()).toBe(4)

    });

    it('should pop to Stack', function () {
        const stack = new Stack();
        expect(stack.pop()).toBeNull()

        stack.push(1)
        expect(stack.pop()).toBe(1)
        expect(stack.pop()).toBeNull()

        stack.push(1)
        stack.push(2)
        stack.push(3)

        expect(stack.pop()).toBe(3)
        expect(stack.pop()).toBe(2)
        expect(stack.pop()).toBe(1)
        expect(stack.pop()).toBeNull()
        expect(stack.pop()).toBeNull()

    });
})
