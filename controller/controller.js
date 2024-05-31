import connect from '../config/db,js';

let post = {};
const con = await connect();

post.create = async ({ title, content, imagePath, videoPath }) => {
  const query = 'INSERT INTO posts (title, content, image_path, video_path) VALUES (?, ?, ?, ?)';
  await con.execute(query, [title, content, imagePath, videoPath]);
};

post.getAll = async () => {
  const [rows] = await con.execute('SELECT * FROM posts');
  return rows;
};

post.getById = async (id) => {
  const [rows] = await con.execute('SELECT * FROM posts WHERE id = ?', [id]);
  return rows[0];
};

post.update = async ({ id, title, content, imagePath, videoPath }) => {
  const query = 'UPDATE posts SET title = ?, content = ?, image_path = ?, video_path = ? WHERE id = ?';
  await con.execute(query, [title, content, imagePath, videoPath, id]);
};

post.delete = async (id) => {
  const query = 'DELETE FROM posts WHERE id = ?';
  await con.execute(query, [id]);
};

export { post };

