const adminModel = require('../../models/admin');



const admin = async(req, res) => {
    try {
        const adminData = await adminModel.find({SuperAdmin: false})
        
        res.render('admin',{adminData});
    } catch (error) {
        console.error("Error admin:", error);
        res.redirect('/admin/adminError');
    }
};



const addAdmin = async(req, res) => {
    try {
        res.render('addAdmin');
    } catch (error) {
        console.error("Error addAdmin:", error);
        res.redirect('/admin/adminError');
    }
};



const addAdminPost =async(req, res) => {
    try {
        const newAdmin = new adminModel({
            name: req.body.name,
            employeId: req.body.employeId,
            role: req.body.role,
            phone: req.body.phone,
            email: req.body.email,
            password: req.body.password,
            SuperAdmin: req.body.role.toLowerCase() === "super admin",
        });
        const data = await newAdmin.save();
       
        
        res.redirect('/admin/adminShow');
    } catch (error) {
        console.error("Error addAdminPost:", error);
        res.redirect('/admin/adminError');
    }
};




const editAdminStatus =async(req, res) => {
    try {
      const adminId = req.params.id;
      const currentStatus = req.query.status === 'true'; 
      const updatedStatus = !currentStatus;

        await adminModel.findByIdAndUpdate(adminId, { status: updatedStatus });

        res.redirect('/admin/adminShow');
    } catch (error) {
        console.error("Error editAdminStatus:", error);
        res.redirect('/admin/adminError');
    }
};



const editAdmin =async(req, res) => {
    try {
        const adminId = req.params.id;
        const adminData = await adminModel.findOne({_id:adminId});

        res.render('editAdmin', {
            admin:adminData
       });
    } catch (error) {
        console.error("Error editAdmin:", error);
        res.redirect('/admin/adminError');
    }
};




const editAdminPost =async(req, res) => {
    try {
        const { name, employeId, role, phone, email, password } = req.body;
        const adminId = req.params.id;

        const adminData = await adminModel.findById(adminId);
        

        const updatedData = {
            name: name || adminData.name,
            employeId: employeId || adminData.employeId,
            role: role || adminData.role,
            phone: phone || adminData.phone,
            email: email || adminData.email,
        };

        if (password) {
            updatedData.password = password;
        }

        await adminModel.findByIdAndUpdate(adminId, updatedData);
        
        res.redirect('/admin/adminShow');
    } catch (error) {
        console.error("Error editAdminPost:", error);
        res.redirect('/admin/adminError');
    }
};





module.exports = {
    admin,
    addAdmin,
    addAdminPost,
    editAdminStatus,
    editAdmin,
    editAdminPost
};