let harga = [1500000]
let tanah = [20.5,30]
let subtotal = 0

for (let index = 0; index < harga.length; index++) {
    subtotal += harga[index] * tanah[index]
}

let total = subtotal = 15/100
console.log('Total = ' + total);
console.log('Subtotal = ' + subtotal);