const add = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b)
        }, 2000)
    })
}

// add(1,2).then((result) => {
//     add(result,result).then((result) => {
//         console.log(result)
//     }).catch((error) => {
//         console.log(error)
//     })
// }).catch((error) => {
//     console.log(error)
// })

add(1,2).then((result) => {
    console.log(result)
    return add(result, 4)
}).then((sum) => {
    console.log(sum)
}).catch((error) => {
    console.log(error)
})