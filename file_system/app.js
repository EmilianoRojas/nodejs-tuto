const fs = require('fs');

console.log('Iniciado');

/*
fs.readFile('data.txt','utf-8',(error, data)=>{
    if(error){
        console.log(`Error ${error}`);
    }else{
        console.log(data)
    }
});
*/

let data = fs.readFileSync('data.txt','utf-8');
console.log(data);

console.log('Finalizado');


/*
fs.rename('data.txt', 'data_renombrado.txt', (error)=>{
    if(error) throw error;
    console.log('Renombrado');
})
*/

fs.appendFile('data.txt', '\n gracias por dar pepa', (error)=>{
    if(error) console.log(`Error${error}`);
    
});

fs.unlink('data2.txt',(error)=>{
    if(error) throw error;
    console.log('ELiminado');
})

