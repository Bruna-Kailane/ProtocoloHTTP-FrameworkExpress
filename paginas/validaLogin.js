const template = require('./template');
const usuarios = require('./usuarios');

module.exports = (req, res) => {
  const params = req.body;
  const { nome, senha } = params;

  let status =401;
  let html;
  for (const usuario of usuarios) {
    console.log(usuario.nome);
    console.log(nome);
    
    if (usuario.nome === nome && usuario.senha === senha) {
      status = 200;
      html = template('Logado com sucesso', `<p>Seja bem vindo ${nome}</p>`);
    }
  }

  if (status === 401) {
    html = template(
      'Login ou senha inválidos',
      '<p>Retorne e tente novamente</p>'
    );
  }
  res.status(status).send(html);
};
