import RecaptchaM from "express-recaptcha";
const Recaptcha = RecaptchaM.RecaptchaV3;
const recaptcha = new Recaptcha(
  process.env.RECAPTCHA_KEY,
  process.env.RECAPTCHA_SECRET,
  {
    callback: "cb",
  }
);
export default recaptcha; // not able to implement racaptcha
