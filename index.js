const app = require('./api/app');
const cors = require('cors');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "localhost:3030/api/listTasks");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
    app.use(cors());
    next();
})

const port = process.env.PORT || 3030;

app.listen(port, ()=>{
    console.log('Aplicação executando na porta ', port);
})