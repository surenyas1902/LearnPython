// setTimeout(() => {
//     console.log("2 seconds over")
// },2000)

// const names = ['Surendiran','Robert','Simmah']
// const shortNames = names.filter((name) => {
//     return name.length <=4
// })
// console.log(shortNames)

// const geocode = (address, callbacks) => {
//     setTimeout( () => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
//         callbacks(data)
//     }, 2000)
 
// }

// const data = geocode('Arakkonam', (data) => {
//     console.log(data)
// })

const add = (a,b,callbacks) => {
    c = a+b
    setTimeout(() => {
        callbacks(c)
    },2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})

