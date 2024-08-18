const express = require('express')
const router = express.Router()

const userHome = require('../../controllers/userControllers/userHome')
const userBlog = require('../../controllers/userControllers/userBlog')
const userProject = require('../../controllers/userControllers/userProject')
const userOtherpage = require('../../controllers/userControllers/userOtherpage')
const userPortfolio = require('../../controllers/userControllers/userPortfolio')
const userPublication = require('../../controllers/userControllers/userPublication')
const userService = require('../../controllers/userControllers/userService')
const usercontact = require('../../controllers/userControllers/usercontact')


router.get('/',userHome.userHome)

router.get('/blog',userBlog.userBlog)

router.get('/project',userProject.userProject)

router.get('/otherpage',userOtherpage.userOtherpage)

router.get('/portfolio',userPortfolio.userPortfolio)

router.get('/publication',userPublication.userPublication)

router.get('/service',userService.userService)

router.get('/contact',usercontact.usercontact)

// router.get('/error',home.userError)




module.exports = router