const express = require('express');
const router = express.Router();


const adminHome = require('../../controllers/adminControllers/adminHome');
const upcomingEvent = require('../../controllers/adminControllers/upcomingEvent')
const adminToDo = require('../../controllers/adminControllers/adminToDo')
const imageUploads = require('../../controllers/adminControllers/imageUploads')
const adminCalender = require('../../controllers/adminControllers/adminCalender')
const adminLogin = require('../../controllers/adminControllers/adminLogin')
const testimonials = require('../../controllers/adminControllers/testimonials')
const adminError = require('../../controllers/adminControllers/adminError')
const eventHistory = require('../../controllers/adminControllers/eventHistory')


router.get('/', adminHome.adminHome);
router.get('/upcomingEvent', upcomingEvent.upcomingEvent);
router.get('/adminToDo',adminToDo.adminToDo)
router.get('/imageUploads',imageUploads.imageUploads)
router.get('/adminCalender',adminCalender.adminCalender)
router.get('/testimonials',testimonials.testimonials)
router.get('/eventHistory',eventHistory.eventHistory)

router.get('/adminLogin',adminLogin.adminLogin)
router.get('/adminError',adminError.adminError)


module.exports = router;