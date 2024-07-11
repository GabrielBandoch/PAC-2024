import express from 'express';
import connect from '../config/db.js'; // Importe o método de conexão com o banco de dados aqui
const router = express.Router();

// Rota para a página inicial
router.get('/', async (req, res) => {
    try {
        const connection = await connect();
        const [posts] = await connection.query('SELECT id_post, title, tags, synopsis, createdAt FROM Post');
        res.render('paginainicial', { posts }); // Renderiza o arquivo views/paginainicial.ejs passando os posts
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar posts');
    }
});


// rota para ir para a pag ler e renderizar o conteudo
router.get('/post/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const connection = await connect();
        const [post] = await connection.query('SELECT * FROM Post WHERE id_post = ?', [id]);
        if (!post.length) {
            return res.status(404).send('Post não encontrado');
        }
        res.render('ler2', { post: post[0] }); // Renderiza o arquivo views/ler2.ejs passando o post encontrado
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar post');
    }
});


// Rota para a página "Sobre"
router.get('/sobre', (req, res) => {
    res.render('sobre'); // Renderiza o arquivo views/sobre.ejs
});

// Rota para a página "Ensino Fundamental 1"
router.get('/fund1', (req, res) => {
    res.render('enfundamental'); // Renderiza o arquivo views/fund1.ejs
});

// Rota para a página "Ensino Fundamental 2"
router.get('/fund2', (req, res) => {
    res.render('enfundamental2'); // Renderiza o arquivo views/fund2.ejs
});

// Rota para a página "Ensino Médio"
router.get('/medio', (req, res) => {
    res.render('enmedio'); // Renderiza o arquivo views/medio.ejs
});

// Rota para a página "Login"
router.get('/login', (req, res) => {
    res.render('login'); // Renderiza o arquivo views/login.ejs
});

// Rota para a página "Ler"
router.get('/ler', (req, res) => {
    res.render('ler'); // Renderiza o arquivo views/ler.ejs
});

// Rota para a página "admin"
router.get('/admin', async (req, res) => {
    try {
        const connection = await connect();
        const [posts] = await connection.query('SELECT id_post, title, tags, synopsis, createdAt FROM Post');
        res.render('admin/admin', { posts }); // Passando os posts para o template admin/admin.ejs
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar posts');
    }
});

// Rota para a página "blog" dentro da área administrativa
router.get('/admin/blog', (req, res) => {
    res.render('admin/blog'); 
});

// Rota para criar um novo post
router.post('/admin/blog/create', async (req, res) => {
    const { title, tags, synopsis, content } = req.body;

    const sql = 'INSERT INTO Post (title, tags, synopsis, content) VALUES (?, ?, ?, ?)';
    try {
        const connection = await connect();
        await connection.query(sql, [title, tags, synopsis, content]);

        // Redirecionar para a página admin
        res.redirect('/admin');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao salvar o post');
    }
});

// Rota para renderizar a página de edição do post
router.get('/admin/editar/:id', async (req, res) => {
    const postId = req.params.id;
    try {
        const connection = await connect();
        const [rows] = await connection.query('SELECT * FROM Post WHERE id_post = ?', [postId]);
        if (rows.length > 0) {
            res.render('admin/editar-post', { post: rows[0] }); // Renderiza a página de edição com os dados do post
        } else {
            res.status(404).send('Post não encontrado');
        }
    } catch (err) {
        console.error('Erro ao buscar post:', err);
        res.status(500).send('Erro ao buscar post');
    }
});

// Rota para processar a edição do post
router.post('/admin/editar/:id', async (req, res) => {
    const postId = req.params.id;
    const { title, tags, synopsis, content } = req.body;

    const sql = 'UPDATE Post SET title = ?, tags = ?, synopsis = ?, content = ? WHERE id_post = ?';
    try {
        const connection = await connect();
        await connection.query(sql, [title, tags, synopsis, content, postId]);

        res.redirect('/admin'); // Redireciona para a página inicial de administração após a edição
    } catch (err) {
        console.error('Erro ao editar post:', err);
        res.status(500).send('Erro ao editar post');
    }
});

// Rota para renderizar o modal de confirmação de exclusão
router.get('/admin/excluir/:id', async (req, res) => {
    const postId = req.params.id;
    try {
        const connection = await connect();
        const [post] = await connection.query('SELECT * FROM Post WHERE id_post = ?', [postId]);
        if (post.length > 0) {
            res.render('admin/admin', { posts: post }); // Renderiza a página admin com o post específico
        } else {
            res.status(404).send('Post não encontrado');
        }
    } catch (err) {
        console.error('Erro ao buscar post:', err);
        res.status(500).send('Erro ao buscar post');
    }
});

// Rota para processar a exclusão do post
router.get('/admin/excluir/confirmar/:id', async (req, res) => {
    const postId = req.params.id;
    try {
        const connection = await connect();
        await connection.query('DELETE FROM Post WHERE id_post = ?', [postId]);
        res.redirect('/admin'); // Redireciona para a página inicial após a exclusão
    } catch (err) {
        console.error('Erro ao excluir post:', err);
        res.status(500).send('Erro ao excluir post');
    }
});

// Rota para a página de registro
router.get('/admin/registro', (req, res) => {
    var message = ' ';
    res.render('admin/registro', { message: message });
});


// Rota para home
router.get("/views/admin/admin", async (req, res) => {
    if (req.session.user) {
        try {
            const connection = await connect();
            const [results] = await connection.query('SELECT * FROM users WHERE email LIKE ?', [req.session.user]);
            res.render('views/admin/admin', { message: results });
        } catch (err) {
            console.error(err);
            res.status(500).send('Erro ao buscar usuário');
        }
    } else {
        res.redirect("/");
    }
});

router.post('/admin/registro', async (req, res) => {
    const { nome, pwd, email, idade } = req.body;
    const queryConsulta = 'SELECT * FROM users WHERE email LIKE ?';
    try {
        const connection = await connect();
        const [results] = await connection.query(queryConsulta, [email]);
        if (results.length > 0) {
            var message = 'E-mail já cadastrado';
            res.render('admin/registro', { message: message });
        } else {
            var query = 'INSERT INTO users (username, email, idade, pass) VALUES (?, ?, ?, ?)';
            await connection.query(query, [nome, email, idade, pwd]);
            var message = "Cadastro realizado com sucesso!";
            res.render('admin/registro', { message: message });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao registrar usuário');
    }
});




// Rota para processar o login
router.post('/log', async (req, res) => {
    const email = req.body.email;
    const pass = req.body.pass;

    try {
        const connection = await connect();
        const [results] = await connection.query('SELECT * FROM users WHERE pass = ? AND email LIKE ?', [pass, email]);
        if (results.length > 0) {
            req.session.user = email;
            console.log("Login feito com sucesso!");
            res.redirect('/admin');
        } else {
            const message = 'Login incorreto!';
            res.render('login', { message: message });
        }
    } catch (err) {
        console.error('Erro ao processar login:', err);
        res.status(500).send('Erro ao processar login');
    }
});


// Rota para atualizar usuário
router.post('/update', async (req, res) => {
    const { nome, pwd, idade } = req.body;
    const query = 'UPDATE users SET username = ?, pass = ?, idade = ? WHERE email LIKE ?';
    try {
        const connection = await connect();
        await connection.query(query, [nome, pwd, idade, req.session.user]);
        const [results] = await connection.query('SELECT * FROM users WHERE email LIKE ?', [req.session.user]);
        res.render('views/admin', { message: results });
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao atualizar usuário');
    }
});

// Rota para deletar usuário
router.post('/delete', async (req, res) => {
    const query = 'DELETE FROM users WHERE email LIKE ?';
    try {
        const connection = await connect();
        await connection.query(query, [req.session.user]);
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao deletar usuário');
    }
});

export default router;

