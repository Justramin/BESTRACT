const userPublication = async (req, res) => {
    try {

        res.render('publication');
    } catch (error) {
        console.error('Error in userPublication:', error);
        // res.redirect('/userError');
    }
};

module.exports = {
    userPublication
};