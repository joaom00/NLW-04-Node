import { Router } from 'express';
import AnswerController from './controllers/AnswerController';
import NpsController from './controllers/NpsController';
import SendEmailController from './controllers/SendEmailController';
import SurveyController from './controllers/SurveyController';
import UserController from './controllers/UserController';

const router = Router();

const usersController = new UserController();
const surveysController = new SurveyController();
const sendMailController = new SendEmailController();
const answerController = new AnswerController();
const npsController = new NpsController();

router.post('/users', usersController.create);

router.get('/surveys', surveysController.show);
router.post('/surveys', surveysController.create);

router.post('/sendMail', sendMailController.execute);

router.get('/answers/:value', answerController.execute);

router.get('/nps/:survey_id', npsController.execute);

export default router;
