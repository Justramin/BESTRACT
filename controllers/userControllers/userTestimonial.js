
const JobSeeker = require('../../models/JobSeeker')





const userTestimonial = async (req, res) => {
    try {

        res.render('testimonial');
    } catch (error) {
        console.error('Error in userTestimonial:', error);
        res.redirect('/userError');
    }
};

const userGetHired = async (req, res) => {
    try {        
        res.render('getHired');
    } catch (error) {
        console.error('Error in userGetHired:', error);
        res.redirect('/userError');
    }
};

const getHiredPost = async (req, res) => {
    try {
        const newJobSeeker = new JobSeeker({
            name: req.body.name,
            phone: req.body.phone,
            interests: req.body.interests,
            email: req.body.email,
            message: req.body.message
        });
        const data =await newJobSeeker.save();
        res.redirect('/testimonial');
    } catch (error) {
        console.error('Error in getHiredPost:', error);
        res.redirect('/userError');
    }
};


module.exports = {
    userTestimonial,
    userGetHired,
    getHiredPost
};
