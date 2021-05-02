const template = require('./template');

module.exports = (req, res) => {
  const html = template(
    'Cadastro do Usuario',
    `
      <form action="/cadastro" method="post">
        <div>
            <label for="nome">Nome</label>
            <input type="text" name="nome" id="nome">
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" name="email" id="email">
        </div>
        <div>
          <label for="senha">Senha</label>
          <input type="password" name="senha" id="senha">
        </div>
        <div>
          <button class="button" type="submit">Cadastrar</button>
        </div>
      </form>
    `
  );
  res.status(200).send(html);
};
