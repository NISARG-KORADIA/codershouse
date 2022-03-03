const router = require('express').Router();
const activateController = require('./controllers/activate-controller');
const authController = require('./controllers/auth-controller');
const authMiddleware = require('./middlewares/auth-middleware');


router.post('/api/send-otp', authController.sendOtp)
router.post('/api/verify-otp', authController.verifyOtp)
// Here middleware function is passed to verify access token and if access token is verified we will append the user data to request body.
router.post('/api/activate', authMiddleware, activateController.activate)

module.exports = router;