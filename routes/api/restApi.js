const express = require('express');
const router = express.Router();
const usersRouter = require('./users/index');

router.use('/users', usersRouter);

module.exports = router;
