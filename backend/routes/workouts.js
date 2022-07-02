const express = require('express');
const router = express.Router()
const Workout = require('../models/Workout')


// Get all workouts
router.get('/', (req, res) => {
    res.json({msg: "Get all workouts"})
})


// Get single workout
router.get('/:id', (req, res) => {
    res.json({msg: "Get a single workouts"})
})

// Create/Post a new workout
router.post('/', async (req, res) => {
    const {title, load, reps} = req.body
    try{
    const workout = Workout.create({title, load, reps})
    res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error: error.message})
    }
})


// Delete  a workout
router.delete('/:id', (req, res) => {
    res.json({msg: "Delete a workout"})
})

// Update a workout
router.patch('/:id', (req, res) => {
    res.json({msg: "Update a workout"})
})



module.exports = router