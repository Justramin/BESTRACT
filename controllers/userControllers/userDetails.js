const userDetails = async (req, res) => {
    try {

        res.render('details');
    } catch (error) {
        console.error('Error in userDetails:', error);
        res.redirect('/userError');
    }
};

module.exports = {
    userDetails
};