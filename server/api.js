const express = require('express');
const firebase = require('firebase');

// config object
const config = {
/*** api keys and stuff would go here! ***/
};

// initialize the config
firebase.initializeApp(config);

// database variable
const db = firebase.database();

// api object
const api = module.exports = express.Router();

/*** ENDPOINTS ***/

// get user by id
api.get('/users', (req, res) => {
    var ref = db.ref(`users/${req.query.id}`);

    console.log(`GETTING USER DATA FOR USER ${req.query.id}`);

    ref.once('value', (data) => {
        res.json(data.val());
        ref.off();
    }, 
    (err) => {
        res.status(500);
        console.log("ERROR: something went wrong with querying user by id");
    });
});

// get all challenges
api.get('/challenges', (req, res) => {
    var ref = db.ref('challenges');
    ref.once('value', (data) => {
        res.json(data.val());
        ref.off();
    }, 
    (err) => {
        res.status(500);
        console.log("ERROR: something went wrong with querying challenges");
    });
});


api.post('/challenges', (req, res) => {
    const { activity, difficulty, location, votes, city, challengeId } = req.query;
    var ref = db.ref(`challenges/challenge${challengeId}`);
    var loc = JSON.parse(location);
    ref.set({ 
        activity: activity, 
        difficulty: difficulty, 
        location: loc,
        votes: votes, 
        city: city,
        challengeId: challengeId,
    });
    res.json();
});
