

const userHome = async (req, res) => {
    try {

        res.render('userHome');
    } catch (error) {
        console.error('Error in userHome:', error);
        res.redirect('/userError');
    }
};

module.exports = {
    userHome
};
