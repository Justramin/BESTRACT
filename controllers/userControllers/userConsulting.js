



const Business_Fix = async (req, res) => {
    try {

        res.render('consulting1');
    } catch (error) {
        console.error('Error in Business_Fix :', error);
        res.redirect('/userError');
    }
};

const Career_Cadence = async (req, res) => {
    try {
        res.render('consulting2');
    } catch (error) {
        console.error('Error in Career_Cadence:', error);
        res.redirect('/userError');
    }
};

const PrepNLift = async (req, res) => {
    try {

        res.render('consulting3');
    } catch (error) {
        console.error('Error in PrepNLift:', error);
        res.redirect('/userError');
    }
};

const Institute2Industry = async (req, res) => {
    try {

        res.render('consulting4');
    } catch (error) {
        console.error('Error in Institute2Industry:', error);
        res.redirect('/userError');
    }
};
module.exports = {
    Business_Fix,
    Career_Cadence,
    PrepNLift,
    Institute2Industry
};