const express = require('express');
const router = express.Router() 
const  {
    getWorkouts,
    getWorkout,
    createWorkout
} = require('../controllers/workout')


// Get all workouts
router.get('/', getWorkouts)

// Get single workout
router.get('/:id', getWorkout)

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