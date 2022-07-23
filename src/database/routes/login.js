const express = require('express');
const { loginController, registerController } = require('../controllers/loginController');
const { validateLogin, validateCreateLogin } = require('../middleware/validateDataLogin');

const router = express.Router();

router.post('/', validateLogin, loginController);
router.post('/create', validateCreateLogin, registerController);

module.exports = router;
