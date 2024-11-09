
const Contact = require('../../models/contact');



const usercontact = async (req, res) => {
    try {

        res.render('contact');
    } catch (error) {
        console.error('Error in usercontact:', error);
        res.redirect('/userError');
    }
};

const contactPost = async (req, res) => {
    try {
        const contact = new Contact({
            name: req.body.name,
            phone: req.body.phone,
            businessType: req.body.businessType,
            email: req.body.email,
            message: req.body.message
        });
        await contact.save();
        res.redirect('/');
    } catch (error) {
        console.error('Error in contactPost:', error);
        res.redirect('/userError'); 
    }
};





module.exports = {
    usercontact,
    contactPost
};