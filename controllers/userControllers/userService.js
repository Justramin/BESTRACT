const userService = async (req, res) => {
    try {

        res.render('service');
    } catch (error) {
        console.error('Error in userService:', error);
        // res.redirect('/userError');
    }
};

module.exports = {
    userService
};