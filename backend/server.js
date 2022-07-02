require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const workoutRoutes = require('./routes/workouts')


// express app
const app = express();
// url encoded
app.use(express.json());

// root file API
app.use('/api/workouts',workoutRoutes)


// connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    // server is running 
    app.listen(process.env.PORT, () => {
            console.log(`Connected to DB & listening on port`, process.env.PORT);
        })
})
.catch((error) =>{
    console.log(error)
})

