const _ =require('lodash');

let x = {"nombre": "Jaime"}
let y = {"apodo": "Mitomano"}
let z = [
    {nombre: "Jaime", apellido:"Medina", edad:"26"},
    {nombre:"Elba", apellido:"zurita", edad:"69"}
]

/*
let resultado = _.assign(x,y);
console.log(resultado); */

_.times(3, ()=> console.log('pepa'));

console.log(_.find(z,{nombre:"Elba"}));