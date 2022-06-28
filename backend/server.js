require('dotenv').config();

const express = require('express');
const workoutRoutes = require('./routes/workouts')


// express app
const app = express();


// middleware 
app.unlock((req, res, next) => {
    console.log(req.path. req.method)
    next();
})



// root file API
app.use('/api/workouts',workoutRoutes)
// server is running 
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port`, process.env.PORT);
})