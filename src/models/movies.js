const express = require("express");
const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    img:{
        type: String,
        require: true
    },
    summary:{
        type: String,
        require: true
    }
})

const MoviesCollection = new mongoose.model("MoviesCollection", movieSchema);

module.exports = MoviesCollection;