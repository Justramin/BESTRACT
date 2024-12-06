
const ContactModel = require('../../models/contact')

const adminHome = async (req, res) => {
    try {
        const contacts = await ContactModel.find();
        res.render('adminHome', { contacts });

    } catch (error) {
        console.error('Error fetching contacts:', error);
        res.render('adminError');
    }
};

module.exports = {
    adminHome
};