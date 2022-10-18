import { counter } from './index'

describe('Counter Function', ()=> {
    test('counter function return an array length of 2', () => {
        const result = counter()
        expect(result.length).toBe(2)
    });
    
    test('getCounter return current state', () => {
        const [getCounter] = counter(1)
        const result = getCounter()
        expect(result).toBe(1)
    });

    test('updateCounter return update state', () => {
        const [getCounter, updateCounter] = counter(11)
        updateCounter()
        const result = getCounter()
        expect(result).toBe(12)
    });
})

    
