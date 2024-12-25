const adminModel = require('../../models/admin')




const adminLogin = async(req, res) => {
   try {
        res.render('adminLogin');
   } catch (error) {
        console.error("Error adminLogin:", error);
        res.redirect('/admin/adminError');
   }
};



const adminLoginPost = async(req, res) => {
    try {
        const {adminId,password} = req.body;

        const adminData = await adminModel.findOne({ 
            employeId: adminId, 
            status: true,
            password:password
        });

        if(adminData){
            req.session.admin = {
                id: adminData._id,
                employeId: adminData.employeId,
                name: adminData.name,
                superAdmin:adminData.SuperAdmin,
                status:adminData.status
              };
            return res.redirect('/admin') 
        }
        res.redirect('/admin/adminLogin')
    } catch (error) {
        console.error("Error adminLoginPost:", error);
        res.redirect('/admin/adminError');
    }
 };




module.exports = {
    adminLogin,
    adminLoginPost
};