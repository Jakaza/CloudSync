import express from 'express';
import cors from 'cors';
import generateUniqueId from './utils';

const app = express()
app.use(cors)
app.use(express.json());


app.post('/deploy', (req , res)=>{
    const repoURL = req.body.repoURL;
    console.log(repoURL);

    res.json({})
})

app.listen(3000, ()=> console.log('listening'));

