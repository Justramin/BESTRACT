const express = require('express');
const path = require('path');
const app = express();
const nocache = require('nocache');
const session = require('express-session')
const connectDB = require('./config/db')
const bodyParser = require('body-parser');
// const cloudinary = 

connectDB();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public', { maxAge: '1d' }));


const userRouter = require('./route/userRoute/userRoute')
const adminRouter = require('./route/adminRoute/adminRoute')


app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(nocache());
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false 
}))



app.set('views', [
    path.join(__dirname,'views/user'),
    path.join(__dirname,'views/admin'), 
])


app.use('/', userRouter)
app.use('/admin',adminRouter)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });