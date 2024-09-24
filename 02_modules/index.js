//Utilizando uma constante para salvar o valor do módulo com mais segurança
const fs = require('fs');

fs.readFile('readme.md', 'utf8', (err, data) => {
    if(err) {
        console.log(err)
    }
    else{
        console.log(data)
    }
})