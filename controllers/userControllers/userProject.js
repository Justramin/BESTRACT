const userProject = async (req, res) => {
    try {

        res.render('project');
    } catch (error) {
        console.error('Error in userProject:', error);
        // res.redirect('/userError');
    }
};

module.exports = {
    userProject
};