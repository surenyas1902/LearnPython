const name = 'Surendiran'
const userAge = 26
const user = {
    name, //Shorthand syntax if both variable and key is same
    age: userAge,
    location:'Arakkonam'
}

console.log(user)

//Object Destructuring

const product = {
    label: 'Notebook',
    price: 30,
    stock: 200,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock

const {label, stock} = product // Property name should be same in the declaration
const {label: ProductLabel, rating = 50} = product //If we need to change the variable name, use the syntax here

console.log(ProductLabel, stock, rating) //If the property is unavailable then only the default value takes place.

const transaction = (type, {label, stock, price}) => {
    console.log(label, stock, price)
};

transaction('order', product)