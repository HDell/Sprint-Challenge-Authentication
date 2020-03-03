/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../config/secrets.js'); //secret string
module.exports = function authenticate(req, res, next) {
  const {authorization} = req.headers;
  if (authorization) { //the token header that comes in through client w/ axiosWithAuth
    jwt.verify(authorization, jwtSecret, (error, decodedToken) => {//sign w/ secret
      if (error) { //error argument will be null if there is no error
        res.status(401).json({you: 'shall not pass!'});
      } else {
        req.decodedToken = decodedToken;
        next(); //e.g. display users
      }
    });
  } else {
    res.status(400).json({message: 'No credentials provided'}); //You are not authorized.
  }
};
