const express = require("express");
const router = new express.Router();
const MoviesCollection = require("../models/movies");

//CRUD Operation,
//Create a movie
router.post("/movies", async(req, res) =>{
    try{
        const addMovies = new MoviesCollection( req.body)
        console.log(req.body)
        const insertMovies = await addMovies.save()
        res.status(201).send(insertMovies);
    }catch(err){
        res.status(400).send(err);
    }
})

//Read all movies
router.get("/movies", async(req, res) =>{
    try{
        const getMovies = await MoviesCollection.find({});
        res.send(getMovies);
    }catch(err){
        res.status(400).send(err);
    }
})

//Read one movie
router.get('/movies/:id', async (req, res) => {
    try{
        const _id = req.params.id;
        const getMovie = await MoviesCollection.findById(_id);
        res.send(getMovie);
    }catch(err){
        res.status(400).send(err)
    } 
});

//Update one movie
router.patch('/movies/:id', async (req, res) => {
    try{
        const _id = req.params.id;
        const updateMovie = await MoviesCollection.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(updateMovie);
    }catch(err){
        res.status(500).send(err)
    } 
});

//Delete one movie
router.delete('/movies/:id', async (req, res) => {
    try{
        const _id = req.params.id;
        const deleteMovie = await MoviesCollection.findByIdAndDelete(_id, req.body, {
        });
        if (!deleteMovie) {
            return res.status(404).send({ message: 'Movie not found' });
        }

        res.send({ message: 'Movie deleted', deleteMovie});
    }catch(err){
        res.status(500).send(err)
    } 
});



module.exports = router;