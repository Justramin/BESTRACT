const TestimonialModel = require('../../models/testimonial');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cloudinary = require('cloudinary').v2;
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


const testimonials = async(req, res) => {
    try {
        const testimonial = await TestimonialModel.find()
        res.render('testimonials',{testimonial});
    } catch (error) {
        console.error("Error testimonials:", error);
        res.redirect('/admin/adminError');
    }
    
};

const addTestimonial = async(req, res) => {
    res.render('addTestimonial');
};


const addTestimonialPost = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send('Image upload required');
        }

        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: 'testimonials/',
            public_id: req.file.filename,
            resource_type: 'image', 
        });

        const newTestimonial = new TestimonialModel({
            name: req.body.name,
            organization: req.body.organization,
            promotionNotes: req.body.promotionNotes,
            image: result.secure_url,
        });

        const data = await newTestimonial.save();    
        
        res.redirect('/admin/testimonials');
    } catch (error) {
        console.error("Error uploading image:", error);
        res.status(500).send('Error saving testimonial');
    }
};



const editTestimonialStatus = async(req, res) => {    
    try {
        const testimonialId = req.params.id;
        const testimonialstatus = req.query.status;

        const statusToUpdate = testimonialstatus == 'true' ? false : true;
        const result = await TestimonialModel.updateOne(
            { _id: new mongoose.Types.ObjectId(testimonialId) },
            { $set: { status: statusToUpdate } }
        );

        if (result.matchedCount === 0) {
            console.error('No document found with the provided ID.');
            return res.redirect('/admin/adminError');
        }
           
        res.redirect('/admin/testimonials');
    } catch (error) {
        console.error("Error editTestimonialStatus:", error);
        res.redirect('/admin/adminError');
    }
    
};



const editTestimonial = async(req, res) => {    
    try {
        const testimonialId = req.params.id;
        const testimonialData = await TestimonialModel.findOne({_id:testimonialId});      
        res.render('editTestimonial', {
           testi: testimonialData
      });
    } catch (error) {
        console.error("Error editTestimonial:", error);
        res.redirect('/admin/adminError');
    }
    
};




const updateTestimonial = async(req, res) => {    
    try {
        const { id } = req.params;
        const { name, organization, promotionNotes, removeImage } = req.body;
        const testimonial = await Testimonial.findById(id);

        if (removeImage) {
            // Delete the current image if applicable
            if (testimonial.image) {
                const imagePath = path.join(__dirname, '..', testimonial.image);
                if (fs.existsSync(imagePath)) {
                    fs.unlinkSync(imagePath);
                }
                testimonial.image = null; // Set to null or remove the field
            }
        }

        // Handle new image upload
        if (req.file) {
            // Save the new image path
            testimonial.image = `/uploads/${req.file.filename}`; // Adjust the path as needed
        }

        testimonial.name = name;
        testimonial.organization = organization;
        testimonial.promotionNotes = promotionNotes;

        await testimonial.save();
        res.redirect('/admin/testimonials');
    res.redirect('/admin/testimonials');
    } catch (error) {
        console.error("Error updateTestimonial:", error);
        res.redirect('/admin/adminError');
    }
    
};





module.exports = {
    testimonials,
    addTestimonial,
    addTestimonialPost,
    editTestimonialStatus,
    editTestimonial,
    updateTestimonial
};