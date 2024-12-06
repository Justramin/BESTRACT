const express = require('express');
const router = express.Router();

// Controller imports
const adminHome = require('../../controllers/adminControllers/adminHome');
const upcomingEvent = require('../../controllers/adminControllers/upcomingEvent');
const adminToDo = require('../../controllers/adminControllers/adminToDo');
const admin = require('../../controllers/adminControllers/admin');
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
router.get('/addUpcomingEvent', upcomingEvent.addUpcomingEvent);
router.post('/addUpcomingEventPost', upcomingEvent.addUpcomingEventPost);
router.get('/editUpcomingEventStatus/:id',upcomingEvent.editUpcomingEventStatus)
router.get('/editUpcomingEvent/:id',upcomingEvent.editUpcomingEvent)
router.post('/editUpcomingEventPost/:id',upcomingEvent.editUpcomingEventPost)


router.get('/testimonials', testimonials.testimonials);
router.get('/addTestimonial',testimonials.addTestimonial)
router.post('/addTestimonialPost', upload.single('image'), testimonials.addTestimonialPost);
router.get('/editTestimonialStatus/:id',testimonials.editTestimonialStatus);
router.get('/editTestimonial/:id',testimonials.editTestimonial)
router.post('/updateTestimonial/:id',upload.single('image'),testimonials.updateTestimonial);


router.get('/adminShow', admin.admin);
router.get('/addAdmin',admin.addAdmin);
router.post('/addAdminPost',admin.addAdminPost);
router.get('/editAdminStatus/:id',admin.editAdminStatus);
router.get('/editAdmin/:id',admin.editAdmin)
router.post('/editAdminPost/:id',admin.editAdminPost)


router.get('/adminToDo', adminToDo.adminToDo);



router.get('/eventHistory', eventHistory.eventHistory);
router.get('/addEventHistory', eventHistory.addEventHistory);
router.post('/addEventHistoryPost', upload.array('image', 5), eventHistory.addEventHistoryPost);
router.get('/editEventHistoryStatus/:id',eventHistory.editEventHistoryStatus);
router.get('/editEventHistory/:id',eventHistory.editEventHistory);
router.post('/updateEventHistory/:id',upload.array('image', 5),eventHistory.updateEventHistory);







router.get('/adminLogin', adminLogin.adminLogin);
router.get('/adminError', adminError.adminError);

module.exports = router;
