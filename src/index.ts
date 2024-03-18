import express from 'express';
import cors from 'cors';
import http from 'http';
import path from "path";
import simpleGit from 'simple-git';
import { generateUniqueId, getAllFiles } from './utils';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/testing', async (req, res) => {
  res.json({ "testing": "It Works" });
});


app.post('/deploy', async (req, res) => {

    const {repo} = req.body;
    const id = generateUniqueId();
    await simpleGit().clone(repo, path.join(__dirname, `output/${id}`))

    const files = getAllFiles(path.join(__dirname, `output/${id}`))
    console.log(files);
    res.json(repo);
  });

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is up at port ${PORT}`);
});
