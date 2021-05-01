const template = require('./template');

module.exports = (req, res) => {
  const params = req.body;
  const { nome, senha } = params;

  let status;
  let html;
  if (nome === 'aluno' && senha === '321') {
    status = 200;
    html = template('Logado com sucesso', `<p>Seja bem vindo ${nome}</p>`);
  } else {
    status = 401;
    html = template(
      'Login ou senha inválidos',
      '<p>Retorne e tente novamente</p>'
    );
  }
  res.status(status).send(html);
};
