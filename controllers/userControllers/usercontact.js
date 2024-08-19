const usercontact = async (req, res) => {
    try {

        res.render('contact');
    } catch (error) {
        console.error('Error in usercontact:', error);
        res.redirect('/userError');
    }
};

module.exports = {
    usercontact
};