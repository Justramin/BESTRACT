const express = require('express');
const router = express.Router();

// Controller imports
const adminHome = require('../../controllers/adminControllers/adminHome');
const upcomingEvent = require('../../controllers/adminControllers/upcomingEvent');
const adminToDo = require('../../controllers/adminControllers/adminToDo');
const adminCalender = require('../../controllers/adminControllers/adminCalender');
const adminLogin = require('../../controllers/adminControllers/adminLogin');
const testimonials = require('../../controllers/adminControllers/testimonials');
const adminError = require('../../controllers/adminControllers/adminError');
const eventHistory = require('../../controllers/adminControllers/eventHistory');

// File upload middleware (assuming you're using multer)
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });  // Configure multer as needed

// Routes
router.get('/', adminHome.adminHome);
router.get('/upcomingEvent', upcomingEvent.upcomingEvent);
router.get('/adminToDo', adminToDo.adminToDo);
router.get('/adminCalender', adminCalender.adminCalender);
router.get('/testimonials', testimonials.testimonials);
router.get('/eventHistory', eventHistory.eventHistory);

router.get('/addUpcomingEvent', upcomingEvent.addUpcomingEvent);
router.post('/addUpcomingEventPost', upcomingEvent.addUpcomingEventPost);

router.get('/addEventHistory', eventHistory.addEventHistory);
router.post('/addEventHistoryPost', upload.array('image', 5), eventHistory.addEventHistoryPost);

router.get('/addTestimonial',testimonials.addTestimonial)
router.post('/addTestimonialPost', upload.single('image'), testimonials.addTestimonialPost);

router.get('/adminLogin', adminLogin.adminLogin);
router.get('/adminError', adminError.adminError);

module.exports = router;
