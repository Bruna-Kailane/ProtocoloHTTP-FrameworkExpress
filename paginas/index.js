const template = require('./template');

module.exports = (req, res) => {
  const html = template(
    'Página Inicial',
    `<p>Seja bem vindo</p>`
  );
  res.status(200).send(html);
};
