function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
    this.tipoCliente = function(edad){
        let tipo;
        if(this.saldo > 1000){
            tipo = 'Gold'
        }else if(this.saldo > 500){
            tipo = 'Platinum'
        }else{
            tipo = 'Normal';
        }
        return tipo;
    }
}

const cliente1 = new Cliente('Pedro', 100);


console.log(cliente1);
