

const userError = async (req, res) => {
    try {

        res.render('error');
    } catch (error) {
        console.error('Error in userError:', error);
        res.redirect('/userError');
    }
};

module.exports = {
    userError
};