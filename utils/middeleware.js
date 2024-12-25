const  adminMiddeleware = async(req,res,next)=>{
    try {
        if(req.session.admin && req.session.admin.status){
            next()
        }else{
            res.redirect('/admin/adminLogin')
        }
    } catch (error) {
        console.error("Error adminMiddeleware:", error);
        res.redirect('/admin/adminError');
    }
};


module.exports = {
    adminMiddeleware
}