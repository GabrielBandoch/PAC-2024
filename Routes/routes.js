import express from 'express'
import connect from '../config/db.js';
import multer from 'multer'

const router = express.Router()

// Configuração do multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Diretório onde os arquivos serão salvos
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname); // Nome do arquivo
    }
  });
  
  const upload = multer({ storage: storage });
  
  // Rota para salvar dados
  router.post('/salvar-dados', upload.fields([{ name: 'image' }, { name: 'video' }]), async (req, res) => {
    try {
      // Acessar arquivos através de req.files
      const image = req.files['image'] ? req.files['image'][0] : null;
      const video = req.files['video'] ? req.files['video'][0] : null;
      
      // Aqui você pode salvar os dados no banco de dados, etc.
      
      res.status(200).send('Dados salvos com sucesso!');
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao salvar os dados.');
    }
  });

// Rota para obter todos os posts
router.get('/obter-posts', async (req, res) => {
    try {
        const posts = await post.getAll();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Rota para obter um post pelo ID
router.get('/obter-post/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const post = await post.getById(id);
        if (!post) {
            res.status(404).send('Post não encontrado');
        } else {
            res.status(200).json(post);
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

// Rota para atualizar um post
router.put('/atualizar-post/:id', upload.fields([{ name: 'image' }, { name: 'video' }]), async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const imagePath = req.files.image ? req.files.image[0].path : null;
    const videoPath = req.files.video ? req.files.video[0].path : null;
  
    try {
        await post.update({ id, title, content, imagePath, videoPath });
        res.status(200).send('Post atualizado com sucesso!');
    } catch (error) {
        res.status(500).send(error);
    }
});

// Rota para deletar um post
router.delete('/deletar-post/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await post.delete(id);
        res.status(200).send('Post deletado com sucesso!');
    } catch (error) {
        res.status(500).send(error);
    }
});  

connect();
export { router };
