const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UsersModel = require('../models/usersModel.js');
const {jwtSecret} = require('../config/secrets.js');

router.post('/register', (req, res) => {
  // implement registration
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;
    UsersModel.add(user)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

router.post('/login', (req, res) => {
  // implement login
    const {username, password} = req.body;
    UsersModel.findBy(username)
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({
                    user: `${user.username}`,
                    token,
                });
            } else {
                res.status(401).json({you: 'shall not pass!'});
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    };
    const options = {
        expiresIn: '2h'
    };
    return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
