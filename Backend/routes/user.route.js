
import express from 'express';
const router = express.Router();

import { register, login , updateProfile , logout } from '../controllers/user.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';


// &------------------------------------------------------------------------------------------------

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthenticated, updateProfile);


export default router;