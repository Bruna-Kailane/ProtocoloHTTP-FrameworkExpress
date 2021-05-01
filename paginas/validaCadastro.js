const template = require('./template');

module.exports = (req, res) => {
  const params = req.body;
  const { nome, email, senha } = params;

  let status;
  let html;
  if ( nome !== '' && email !== '' && senha !== '') {
    status = 200;
    html = template('Cadastrado com sucesso', `<p>Seja bem vindo ${nome}</p>`);
  } else {
    status = 401;
    html = template(
      'Erro ao efetuar cadastro',
      '<p>Usuario esqueceu de preencher algum campo, retone e tente novamente</p>'
    );
  }
  res.status(status).send(html);
};

