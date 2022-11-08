import PostController from './controller';

const router = require('express').Router();

// router.get('/create', PostController.create);
router.get('/recommend', PostController.recommend);
router.get('/:id', PostController.findOne);
router.get('/', PostController.findAll);

export default router;
