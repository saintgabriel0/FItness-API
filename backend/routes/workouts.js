const express = require('express');
const router = express.Router() 
const  {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workout')


// Get all workouts
router.get('/', getWorkouts)

// Get single workout
router.get('/:id', getWorkout)

// Create/Post a new workout
router.post('/', createWorkout)

// Delete  a workout
router.delete('/:id', deleteWorkout)

// Update a workout
router.patch('/:id', updateWorkout )


module.exports = router