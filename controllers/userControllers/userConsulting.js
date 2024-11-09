



const userConsulting = async (req, res) => {
    try {

        res.render('consulting');
    } catch (error) {
        console.error('Error in userConsulting:', error);
        res.redirect('/userError');
    }
};

module.exports = {
    userConsulting
};