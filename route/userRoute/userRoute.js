

const express = require('express')
const router = express.Router()

const userHome = require('../../controllers/userControllers/userHome')
const userConsulting = require('../../controllers/userControllers/userConsulting')
const userEvents = require('../../controllers/userControllers/userEvents')
const userDetails = require('../../controllers/userControllers/userDetails')
const usercontact = require('../../controllers/userControllers/usercontact')
const userError = require('../../controllers/userControllers/userError')
const userTestimonial = require('../../controllers/userControllers/userTestimonial')

router.get('/',userHome.userHome)
router.get('/home',userHome.userHome)

router.get('/events',userEvents.userEvents)
router.get('/details',userDetails.userDetails)
router.get('/contact',usercontact.usercontact)
router.get('/userError',userError.userError)
router.get('/testimonial',userTestimonial.userTestimonial)
router.get('/getHired',userTestimonial.userGetHired)
router.post('/getHiredPost',userTestimonial.getHiredPost)
router.post('/contactPost',usercontact.contactPost)

router.get('/Business_Fix',userConsulting.Business_Fix)
router.get('/Career_Cadence',userConsulting.Career_Cadence)
router.get('/PrepNLift',userConsulting.PrepNLift)
router.get('/Institute2Industry',userConsulting.Institute2Industry)

module.exports = router