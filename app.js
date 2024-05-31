import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import multer from 'multer';
import cors from 'cors';
import { router } from './routes/routes.js'; // Corrija a importação do router

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Configuração do CORS
app.use(cors());

// Middleware para definir cabeçalhos CORS manualmente (opcional, pois o pacote cors já cobre isso)
app.all('*', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

// Middleware para servir arquivos estáticos
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/JavascriptFront', express.static(path.join(__dirname, 'JavascriptFront')));
app.use('/img', express.static(path.join(__dirname, 'img'))); // Servir a pasta img
app.use('/img_bd', express.static(path.join(__dirname, 'img_bd')));

// Middleware para processar requisições JSON e URL encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuração do Multer para upload de arquivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'img_bd/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Adicionar o upload ao roteador
app.use((req, res, next) => {
  req.upload = upload;
  next();
});

// Servir o arquivo index.html quando acessar a rota raiz
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Páginas', 'paginaInicial.html'));
});

app.use(express.static(path.join(__dirname, 'Páginas')));

// Usar as rotas definidas em router
app.use("/", router);

// Define uma rota para servir a página de login
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/Páginas/login.html');
});

// Define uma rota para servir a página de login
app.get('/admin', (req, res) => {
  res.sendFile(__dirname + '/Páginas/admin.html');
});

// Define uma rota para servir a página de login
app.get('/sobre', (req, res) => {
  res.sendFile(__dirname + '/Páginas/sobre.html');
});

// Define uma rota para servir a página de login
app.get('/ler', (req, res) => {
  res.sendFile(__dirname + '/Páginas/ler.html');
});

// Define uma rota para servir a página de login
app.get('/fund1', (req, res) => {
  res.sendFile(__dirname + '/Páginas/enfundamental.html');
});

// Define uma rota para servir a página de login
app.get('/fund2', (req, res) => {
  res.sendFile(__dirname + '/Páginas/enfundamental2.html');
});

// Define uma rota para servir a página de login
app.get('/medio', (req, res) => {
  res.sendFile(__dirname + '/Páginas/enmedio.html');
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
