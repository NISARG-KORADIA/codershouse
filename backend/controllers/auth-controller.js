const otpSevice = require('../services/otp-service');
const hashService = require('../services/hash-service');
const userService = require('../services/user-service');
const tokenService = require('../services/token-service');
const UserDto = require('../dtos/user-dto')

class AuthController {
  async sendOtp(req, res) {

    console.log(`Request of sendOtp:\n${req}`);

    const { phone } = req.body;

    if (!phone) {
      res.status(400).json({ message: 'Phone field is required!' });
    }

    const otp = await otpSevice.generateOtp();

    //ttl = time to leave
    const ttl = 1000 * 60 * 2;
    const expires = Date.now() + ttl;
    const data = `${phone}.${otp}.${expires}`;
    // This hash will later be return in request and we will use this to verify the data(OTP) we got in response from user.
    const hash = hashService.hashOtp(data);

    try {
      // Using twilio service to send message.
      // await otpSevice.sendBySms(phone, otp);
      // res.json({
      //   hash: `${hash}.${expires}`,
      //   phone,
      // })

      // for testing purpose we are sending otp in response
      res.json({
        hash: `${hash}.${expires}`,
        phone,
        otp
      })
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Failed delivering message" })
    }

    // res.send(`Your otp is: ${data}`);
  }

  async verifyOtp(req, res) {
    console.log(`Request of verifyOtp:\n${req}`);
    // Deconstructing the data we got in response and also checking if they are not null.
    const { otp, hash, phone } = req.body;
    if (!otp || !hash || !phone) {
      res.status(400).json({ message: "All fields are required" });
    }

    const [hashOtp, expires] = hash.split('.');

    // Checking for time out.
    if (Date.now() > +expires) {
      return res.status(400).json({ message: 'OTP expired!' });
    }

    // Verifying previous data with this data by comparing previous hash and computed hash of data.
    const data = `${phone}.${otp}.${expires}`;
    const isValid = otpSevice.verifyOtp(hashOtp, data);
    if (!isValid) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    // Creating a user if it already does not exist.
    let user;
    try {
      user = await userService.findUser({ phone });
      if (!user) {
        user = await userService.createUser({ phone });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'db error' });
    }

    // Generating a token based on the user id.
    const { accessToken, refreshToken } = tokenService.generateToken({ _id: user._id, activated: false });

    // Storing the refresh token in model.
    tokenService.storeRefreshToken(refreshToken, user._id);

    // sending refreshToken and accessToken with cookie.
    res.cookie('refreshtoken', refreshToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true
    });
    res.cookie('accessToken', accessToken, {
      maxAge: 1000 * 60 * 60,
      httpOnly: true
    });

    // Creating perfect user before sending it.
    const userDto = new UserDto(user);
    res.json({ user: userDto, auth: true });
  }

}

module.exports = new AuthController();