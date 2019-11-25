const saludar = (persona,sexo) => {
    let saludo = sexo === 'm'
               ? `Bienvenido`
               : `Bienvenida`
    return `${saludo} a EDteam, ${persona}`
}

console.log(saludar('Adrian','m'))
console.log(saludar('Pedro','m'))
console.log(saludar('Adriana','Roberto'))
console.log(saludar('Juan Domingo','m'))

const sumar = (a,b) => a + b

console.log(sumar(1,4))
console.log(sumar(3,9))