const userOtherpage = async (req, res) => {
    try {

        res.render('otherpage');
    } catch (error) {
        console.error('Error in userOtherpage:', error);
        // res.redirect('/userError');
    }
};

module.exports = {
    userOtherpage
};