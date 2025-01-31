import express from 'express';
import { register, login, logout,sendVerifiOTP} from '../controllers/authController.js';

const authRouter = express.Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);
authRouter.post('/send-verify-otp', userAuth, sendVerifiOTP);

export default authRouter;
