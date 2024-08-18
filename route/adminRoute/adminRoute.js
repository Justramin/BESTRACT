const express = require('express');
const router = express.Router();
const dashboard = require('../../controllers/adminControllers/adminDashbord');

router.get('/', dashboard.adminDashboard);

module.exports = router;