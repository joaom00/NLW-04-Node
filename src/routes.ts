import { Router } from 'express';
import SurveyController from './controllers/SurveyController';
import UserController from './controllers/UserController';

const router = Router();

const usersController = new UserController();
const surveysController = new SurveyController();

router.post('/users', usersController.create);

router.get('/surveys', surveysController.show);
router.post('/surveys', surveysController.create);

export default router;
