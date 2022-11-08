import UserController from './controller';

const router = require('express').Router();

// router.get('/create', UserController.create); // 导入数据
router.get('/recommend', UserController.recommend); // 推荐用户

export default router;
