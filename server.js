import express from 'express';
import winston from 'winston';

const app = express();

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
  winston.log({ message: `app running on port ${app.get('port')}` });
});
