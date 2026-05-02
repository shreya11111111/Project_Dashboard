const express = require('express');
const verifyToken = require('../guards/verifyToken');
const { getDashboard } = require('../handlers/statsHandler');

const router = express.Router();

router.use(verifyToken);
router.get('/', getDashboard);

module.exports = router;
