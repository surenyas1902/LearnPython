const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit, add } = require('../src/math')
test('Should calculate total with tip', () => {
    const total = calculateTip(10, 30)
    expect(total).toBe(13)
})

test('Calculate Total with Default Tip', () => {
    const total = calculateTip(10)
    expect(total).toBe(12.5)
})

test('Should Convert 32 F to 0 C', () => {
    const response = fahrenheitToCelsius(32)
    expect(response).toBe(0)
})

test('Should Convert 0 C to 32 F', () => {
    const response = celsiusToFahrenheit(0)
    expect(response).toBe(32)
})

// test('Async Test Demo', (done) => {
//     setTimeout(() => {
//         expect(1).toBe(2)
//         done()
//     }, 2000)
// })

test('Should add 2 numbers', (done) => {
    add(2,3).then((sum) => {
        expect(sum).toBe(5)
        done()
    })
})

test('Should add 2 numbers async/await', async () => {
    const sum = await add(20,33)
    expect(sum).toBe(53)
})