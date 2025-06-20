import express from 'express';
import { prisma } from '../utils/prisma.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// 할 일 생성 API
router.post('/', authenticateToken, async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const { userId } = req.user;

    if (!title) {
      return res.status(400).json({ message: '제목은 필수 입력값입니다.' });
    }

    const todo = await prisma.todos.create({
      data: {
        userId,
        title,
        description,
      },
    });

    return res.status(201).json({ todoId: todo.todoId });
  } catch (error) {
    next(error);
  }
});

// 할 일 목록 조회 API
router.get('/', authenticateToken, async (req, res, next) => {
  try {
    const { userId } = req.user;

    const todos = await prisma.todos.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
});

export default router;
