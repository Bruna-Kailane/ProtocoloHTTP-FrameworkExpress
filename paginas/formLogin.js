const template = require('./template');

module.exports = (req, res) => {
  const html = template(
    'Login',
    `<form action="/login" method="post">
        <div>
            <label for="nome">Nome</label>
            <input type="text" name="nome" id="nome">
        </div>
        <div>
          <label for="senha">Senha</label>
          <input type="password" name="senha" id="senha">
        </div>
        <div>
          <button class="button" type="submit">Cadastrar</button>
        </div>
      </form>`
  );
  res.status(200).send(html);
};
