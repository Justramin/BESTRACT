const ToDoModel = require('../../models/toDo')


const adminToDo = async(req, res) => {
    try {
        const adminStatus = req.session?.admin?.superAdmin;
        const ToDoData = await ToDoModel.find()
      
        res.render('adminToDo',{
            ToDoData,
            adminStatus
        });
    } catch (error) {
        console.error("Error adminToDo:", error);
        res.status(500).send('Error saving testimonial');
    }
};




const creatToDo = async(req, res) => {
    try {
        const {todoMessage} = req.body;
        const name =req.session.admin.name
        
        const newToDo = new ToDoModel({
            employeeName: name,
            message: todoMessage,
          });
          await newToDo.save();

        res.redirect('/admin/adminToDo');
    } catch (error) {
        console.error("Error creatToDo:", error);
        res.status(500).send('Error saving testimonial');
    }
};





const updateToDoStatus = async(req, res) => {
    try {
        res.redirect('/admin/adminToDo');
    } catch (error) {
        console.error("Error updateToDoStatus:", error);
        res.status(500).send('Error saving testimonial');
    }
};



const updateToDoStatusCompleted = async(req, res) => {
    try {
        const { todoId } = req.body;
        await ToDoModel.findByIdAndUpdate(todoId, { status: 'completed' }, { new: true });
        
        res.redirect('/admin/adminToDo');
    } catch (error) {
        console.error("Error updateToDoStatusCompleted:", error);
        res.status(500).send('Error saving testimonial');
    }
};




const updateToDoStatusFinished = async(req, res) => {
    try {
       const {todoId ,action } = req.body;
       if (action === 'accept') {
            await ToDoModel.findByIdAndDelete(todoId);
        } else {
            await ToDoModel.findByIdAndUpdate(todoId, { status: 'pending' }, { new: true });
        }
        res.redirect('/admin/adminToDo');
    } catch (error) {
        console.error("Error updateToDoStatusFinished:", error);
        res.status(500).send('Error saving testimonial');
    }
};





module.exports = {
    adminToDo,
    creatToDo,
    updateToDoStatus,
    updateToDoStatusCompleted,
    updateToDoStatusFinished
};