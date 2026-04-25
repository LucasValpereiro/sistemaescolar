
/**
Criar uma rota DELETE /users/:id

Regras:
1. A rota deve apagar apenas o suário que tem o mesmo ID recebido
2. A rota deve retornar um erro 404 quando receber um id que não

Um pouco mais avançado
No lugar de apagar o usuário da "tabela", adicionar um campo chamado deleted_at, e na lista de usuários retornar 
apenas o usuário que não tem esse campo definido.

Em projetos grandes é comum não apagar de fatos os registros, e no lugaar de apagar definir apenas 
uma flag para esse usuário não ser mais considerado nas buscas, assim evita perder dados.
 */

const fakeUsers = [
    {
        id: 1,
        name: "Wilson",
        email: "wilson69@mail.com"
    }
];

async function ListUser(req, res) {
    res.send(fakeUsers);
}

function FindUser(req, res){
        const {id} = req.params;

        const user = fakeUsers.find(user => Number(user.id) === Number(id));
        if(!user) {
            res.status(404);
            return res.json({
                error: 'Not found'
            });
        }
        res.json(user);
    }

function CreateUser(req, res) {
    const {name, email} = req.body;

    const id = fakeUsers.length + 1;

    fakeUsers.push({id, name, email});
    
    res.json({
        message: "Usuario cadastrado com sucesso!"
    });
}

function UpdateUser(req, res){
    const {id} = req.params;
    const {name, email} = req.body;

    fakeUsers.forEach(user => {
        if(Number(user.id) === Number(id)){
            user.name = name || user.name;
            user.email = email || user.email
        }
    })

    

   // let usuarioEncontrado = fakeUsers.find(user => Number(user.id) === Number(id));
    
    //usuarioEncontrado.name = name || usuarioEncontrado.name
    //usuarioEncontrado.name = email || usuarioEncontrado.email

    res.send('Usuário atualizado com sucesso!');
}

module.exports = {
    ListUser,
    FindUser,
    CreateUser,
    UpdateUser
}