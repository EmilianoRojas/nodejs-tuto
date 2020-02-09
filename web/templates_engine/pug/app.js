const express = require ('express');
const app = express();

let personas = [
    {
        id:1,
        nombre:"elcoco"
    },
    {
        id:2,
        nombre:"mito"
    },
    {
        id:3,
        nombre:"code"
    }
]

app.set('view engine', 'pug');

app.get('/', (req,res)=>{
    res.render('template', {
        titulo : 'pug',
        mensaje : 'ESRP',
        personas:personas
    })

});

app.listen(3000,()=>{
    console.log('Corriendo en el puerto 3000')
});