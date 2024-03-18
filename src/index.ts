import express from 'express';
import cors from 'cors';
import http from 'http';
import simpleGit from 'simple-git';
import { generateUniqueId } from './utils';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/testing', async (req, res) => {
  res.json({ "testing": "It Works" });
});

app.post('/deploy', async (req, res) => {

    const {repo} = req.body;
    await simpleGit().clone(repo, `output/${generateUniqueId()}`)
    res.json(repo);

  });

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is up at port ${PORT}`);
});
