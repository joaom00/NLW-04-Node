import { Router } from 'express';
import AnswerController from './controllers/AnswerController';
import SendEmailController from './controllers/SendEmailController';
import SurveyController from './controllers/SurveyController';
import UserController from './controllers/UserController';

const router = Router();

const usersController = new UserController();
const surveysController = new SurveyController();
const sendMailController = new SendEmailController();
const answerController = new AnswerController();

router.post('/users', usersController.create);

router.get('/surveys', surveysController.show);
router.post('/surveys', surveysController.create);

router.post('/sendMail', sendMailController.execute);

router.get('/answer', answerController.execute);

export default router;
