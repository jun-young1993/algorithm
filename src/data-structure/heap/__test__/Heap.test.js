import Heap from '../Heap';

describe('Heap', () => {
    it('should created throw', function () {

        const instantiate = () => {
            new Heap();
        }
        expect(instantiate).toThrow()
    });
})
