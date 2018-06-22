import express from 'express';
import winston from 'winston';
import path from 'path';

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, '../dist')));
app.get('/', (req, res) =>
  res.status(200).sendFile(path.join(__dirname, '../dist/index.html')));
app.listen(app.get('port'), () => {
  winston.log({ message: `app running on port ${app.get('port')}` });
});
