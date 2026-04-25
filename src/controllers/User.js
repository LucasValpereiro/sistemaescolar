
/**
 Desafio para casa:

 Criar um rota PUT /users/:id que atualiza os dados de um usuario que 
 já existe.
 
 Regras:
 1. Usuario precisa ter id numerico
 2. No POST o novo usuario deve ser criado com id
 3. No PUT deve ser atualizado apenas os campos envidos no body
 
 Exemplo de fakeUsers com id: [{id: 1, name: "Joselito", email: 'joselito@mail.com'}]
 */

const fakeUsers = [
    {
        name: "Wilson",
        email: "wilson69@mail.com"
    }
];

async function ListUser(req, res) {
    res.send(fakeUsers);
}

function CreateUser(req, res) {
    const {name, email} = req.body;
    fakeUsers.push({name, email});
    res.json({
        message: "Usuario cadastrado com sucesso!"
    });
}

module.exports = {
    ListUser,
    CreateUser
}