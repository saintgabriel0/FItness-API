const express = require('express');
const router = express.Router() 
const  {
    createWorkout
} = require('../controllers/workout')


// Get all workouts
router.get('/', (req, res) => {
    res.json({msg: "Get all workouts"})
})


// Get single workout
router.get('/:id', (req, res) => {
    res.json({msg: "Get a single workouts"})
})

// Create/Post a new workout
router.post('/', createWorkout)


// Delete  a workout
router.delete('/:id', (req, res) => {
    res.json({msg: "Delete a workout"})
})

// Update a workout
router.patch('/:id', (req, res) => {
    res.json({msg: "Update a workout"})
})


module.exports = router