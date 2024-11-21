const express = require('express');
const mongoose = require('mongoose');

// MongoDB connection URL
const url = "mongodb+srv://kkndchaitanya:Jk1bl0Q1mVcnHx6o@cluster0.kh99u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connecting to MongoDB
mongoose.connect(url)
    .then(() => console.log("Database Connected..."))
    .catch(err => console.log(err));

// Define a schema for the "Book" collection
var bookSchema = mongoose.Schema({
    name: String,
    isbn: { type: String, index: true },
    author: String,
    pages: Number
});

// Create a model for the "Book" collection
var Book = mongoose.model("Book", bookSchema);

// Handling connection events
var db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", function () {
    console.log("Connected to DB");
});
