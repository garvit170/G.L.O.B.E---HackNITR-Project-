const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const cors = require('cors');
var bodyParser = require('body-parser');
const User = require('./modules/user');
const Scholarship = require('./modules/scholarship');
const Job = require('./modules/job');


const app = express();

app.use(cors())

app.use(bodyParser.urlencoded({extended: true}));

const PORT = 5000;

app.get('/', (req, res) => {
    console.log('requested!');
    res.sendFile(__dirname + "/../index.html");
})

app.get("/scholarships", function(req, res) {
    res.sendFile(__dirname + "/../scholarship.html");
  });


// DB Connection
mongoose.connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Mongo Connected!!!')
}).catch(err => {
    console.log(err)
})

app.post('/apply', (req, res) => {
    console.log(req.body)
    User.create(
        {
            name: "Vibhor",
            email: req.body.email,
            age: req.body.age,
            contact: req.body.contact,
            gender: req.body.gender
        },
        function(err, newUser) {
            if(err){
                res.redirect("http://localhost:5500/index.html")
            }else{
                res.redirect("http://localhost:5500/index.html")
            }
        }
    )
})

app.post('/add/job', (req, res) => {
    Job.create(
        {
            title: req.body.title,
            description: req.body.description,
            openings: req.body.openings,
            role: req.body.role,
        },
        function(err, newJob) {
            if(err){
                res.redirect("http://localhost:5500/index.html")
            }else{
                res.redirect("http://localhost:5500/index.html")
            }
        }
    )
})

app.post('/add/scholarship', (req, res) => {
    Scholarship.create(
        {
            title: req.body.title,
            description: req.body.description,
            numbers: req.body.numbers,
            eligibility: req.body.eligibility,
        },
        function(err, newScholarship) {
            if(err){
                res.redirect("http://localhost:5500/index.html")
            }else{
                res.redirect("http://localhost:5500/index.html")
            }
        }
    )
})

app.listen(PORT, () => {
    console.log(`app started ${PORT}`)
});
