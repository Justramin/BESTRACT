const userEvents = async (req, res) => {
    try {

        res.render('events');
    } catch (error) {
        console.error('Error in userEvents:', error);
        res.redirect('/userError');
    }
};

module.exports = {
    userEvents
};