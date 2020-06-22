// const config = require("config");
// const jwtPrivateKey = config.get("jwtPrivateKey");
const jwt = require("jsonwebtoken");
const jwtPrivateKey = "contactApp";

module.exports.generateToken = (payload, expiresIn) => {
  return jwt.sign(payload, jwtPrivateKey);
};
