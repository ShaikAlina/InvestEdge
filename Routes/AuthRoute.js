const {SignUp} = require("../Controllers/SignUp");
const {Login} = require("../Controllers/login");
const { userVerification } = require("../Middlewares/AuthMiddlewares");
const router = require("express").Router();

router.post("/signup",SignUp);
router.post("/login",Login);
router.post('/',userVerification)

module.exports = router;