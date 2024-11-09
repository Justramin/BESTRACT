const Testimonial = require('../../models/testimonial');
const dotenv = require('dotenv');
const cloudinary = require('cloudinary').v2;
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


const testimonials = async(req, res) => {
    res.render('testimonials');
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

        const newTestimonial = new Testimonial({
            name: req.body.name,
            organization: req.body.organization,
            promotionNotes: req.body.promotionNotes,
            image: result.secure_url,
        });

        const data = await newTestimonial.save();
        console.log(data);
        
        
        res.redirect('/admin/testimonials');
    } catch (error) {
        console.error("Error uploading image:", error);
        res.status(500).send('Error saving testimonial');
    }
};


module.exports = {
    testimonials,
    addTestimonial,
    addTestimonialPost
};