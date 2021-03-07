import { Router } from 'express';
import SurveyController from './controllers/SurveyController';
import UserController from './controllers/UserController';

const router = Router();

const usersController = new UserController();
const surveysController = new SurveyController();

router.post('/users', usersController.create);
router.post('/surveys', surveysController.create);

export default router;
