// Função para carregar usuários do arquivo JSON
function carregarUsuarios() {
    return fetch('admin.json')
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.error('Erro ao carregar usuários:', error));
}

// Função para salvar usuários no arquivo JSON (somente para simulação)
function salvarUsuarios(usuarios) {
    // Em um ambiente real, isso envolveria uma chamada de backend para salvar os dados
    console.log('Usuários salvos (simulado):', JSON.stringify(usuarios, null, 2));
}

// Função para cadastrar um novo usuário
function cadastrarUsuario(nome, email, senha, tipoUsuario) {
    carregarUsuarios().then(usuarios => {
        const usuarioExistente = usuarios.find(usuario => usuario.email === email);
        if (usuarioExistente) {
            alert('Usuário já cadastrado com este email.');
            return;
        }

        const novoUsuario = {
            nome,
            email,
            senha,
            tipoUsuario
        };

        usuarios.push(novoUsuario);
        salvarUsuarios(usuarios);
        alert('Cadastro realizado com sucesso!');
    });
}

// Função para autenticar usuário no login
function autenticarUsuario(email, senha) {
    carregarUsuarios().then(usuarios => {
        const usuario = usuarios.find(usuario => usuario.email === email && usuario.senha === senha);
        if (usuario) {
            alert('Login bem-sucedido! Bem-vindo, ' + usuario.nome);
            // Aqui você pode redirecionar o usuário para a página desejada
        } else {
            alert('Email ou senha incorretos. Tente novamente.');
        }
    });
}

// Eventos de clique para os formulários
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('emailLogin').value;
    const senha = document.getElementById('senhaLogin').value;
    autenticarUsuario(email, senha);
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nomeCadastro').value;
    const email = document.getElementById('emailCadastro').value;
    const senha = document.getElementById('senhaCadastro').value;
    const tipoUsuario = document.getElementById('tipoUsuario').value;
    cadastrarUsuario(nome, email, senha, tipoUsuario);
});
