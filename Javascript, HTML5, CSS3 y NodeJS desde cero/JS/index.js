// const edad = 10
// if (edad > 5 && edad < 18) {
//     console.log('Estoy loco')
// }

// let x= 0
// while(x < 5) {
//     console.log(x)
//     x++
// }

// switch('minecraft si joder') {
//     case 1: 
//         console.log('yo soy el caso 1')
//         break
//     case 2:
//         console.log('estoy loco')
//         break
//     case 3:
//         console.log('estoy feliz')
//         break
//     default:
//         console.log('amo a mi novia')
//         break
// }



// function iterar(arg1) {
//     for(let i = 0; i < arg1.length; i++) {
//         console.log(arg1[i])
//     }
// }

// const numeros = [1, 2, 'Hola', 4, 5]
// const nombres = ['Pedro', 'Juan' ,'Rajoy' ,'Toni' ,'Roci']
// iterar(numeros)
// iterar(nombres)


// function suma(a, b) {
//     return a + b;
// }

// const resultado = suma(5, 5)
// const resultado2 = suma(5,6)
// const resultado3 = suma(resultado,resultado2)
// console.log(resultado3)

function sumar(a, b, cb) {
    const r = a + b;
    cb(r)
}

function callback(result) {
    console.log('resultado', result)    
}

// sumar(2, 3, callback)

//fat arrow functions
// const miFatArrowFunction = (a, b) => a + b
// const otraFAF = (a,b) => {
//     return a + b
// }
//  const r = otraFAF(1 , 2)
//  console.log(r)


sumar(2, 3, function (r) {
    console.log('soy una funcion anonima y mi resultaod es ' + r)
})