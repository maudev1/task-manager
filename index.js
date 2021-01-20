const app = require('./api/app');

const port = process.env.PORT || 3030;


app.listen(port, ()=>{
    console.log('Aplicação executando na porta ', port);
})