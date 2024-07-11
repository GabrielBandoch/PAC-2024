import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import connect from './config/db.js';
import router from './routes/routes.js';
import session from 'express-session';
import bodyParser from 'body-parser';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurar EJS como o motor de visualização
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//config bodyparser para leitura de post
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Configurar a pasta pública para arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para parsear o corpo das requisições
app.use(express.urlencoded({ extended: true }));

// Middleware para sessão e mensagens flash
app.use(session({
    secret: 'sua_chave_secreta',
    resave: false,
    saveUninitialized: true
}));

// Middleware para garantir que a variável message esteja sempre definida
app.use((req, res, next) => {
    res.locals.message = '';
    next();
});

// Conectar ao banco de dados
connect().then(() => {
    console.log('Conectado ao banco de dados');
}).catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
});

// Usar as rotas configuradas
app.use('/', router);

// Iniciar o servidor
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
