const userPortfolio = async (req, res) => {
    try {

        res.render('portfolio');
    } catch (error) {
        console.error('Error in userPortfolio:', error);
        // res.redirect('/userError');
    }
};

module.exports = {
    userPortfolio
};