const express = require('express');
const index = require('./paginas/index');
const formCadastroUser = require('./paginas/formCadastroUser');
const validaCadastro = require('./paginas/validaCadastro');
const formLogin = require('./paginas/formLogin');
const validaLogin = require('./paginas/validaLogin');
const app = express();

//app.use(express.static('public'));
//post
app.use(express.urlencoded({ extended: false }));

app.get('/', index);
app.get('/cadastro',formCadastroUser);
app.post('/cadastro', validaCadastro);
app.get('/entrar', formLogin);
app.post('/login', validaLogin);

const port = 3000;
app.listen(port, () => {
  console.log(`Acesse http://localhost:${port} para testar.`);
});
