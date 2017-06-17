import express from 'express';
import path from 'path';

let app = express();

app.get('/*', (req, res) =>{
  res.send(path.join(__dirname, './index.html'));
});

app.listen(3000, () => console.log('Listening from localhost:3000'));
