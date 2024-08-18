const userBlog = async (req, res) => {
    try {

        res.render('blog');
    } catch (error) {
        console.error('Error in userBlog:', error);
        // res.redirect('/userError');
    }
};

module.exports = {
    userBlog
};