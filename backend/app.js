import express from 'express';
import dotenv from 'dotenv';
import authRouter from './routers/auth.router.js';

dotenv.config();
const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/auth', authRouter);

app.listen(PORT, () => {
  console.log(`${PORT}번 포트에서 서버 실행 중`);
});
