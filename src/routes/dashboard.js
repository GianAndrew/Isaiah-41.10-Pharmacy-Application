const express = require('express');
const router = express.Router();

const { getPage } = require('../controller/dashboard');

router.get('/', getPage);
module.exports = router;
