const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Bring in mongoose model, Place, to represent a restaurant
const Place = mongoose.model('Place');

// create two routes that return json
// GET /api/places
// POST /api/places/create
// You do not have to specify api in your urls
// since that's taken care of in app.js when
// this routes file is loaded as middleware
router.get('/places', (req, res) => {
    if (req.query.location && req.query.cuisine) {
        Place.find({ 'location': req.query.location, 'cuisine': req.query.cuisine }, function(err, places) {
            if (err) {
                res.send({ 'error': err });
            }
            res.send(places);
        }).lean();
    } else if (req.query.location) {
        Place.find({ 'location': req.query.location }, function(err, places) {
            if (err) {
                res.send({ 'error': err });
            }
            res.send(places);
        }).lean();
    } else if (req.query.cuisine) {
        Place.find({ 'cuisine': req.query.cuisine }, function(err, places) {
            if (err) {
                res.send({ 'error': err });
            }
            res.send(places);
        }).lean();
    } else {
        Place.find({}, function(err, places) {
            if (err) {
                res.send({ 'error': err });
            }
            res.send(places);
        }).lean();
    }
});

router.post('/places', (req, res) => {
    const name = req.body.name;
    const location = req.body.location;
    const cuisine = req.body.cuisine;

    console.log(name);
    console.log(location);
    console.log(cuisine);

    new Place({
        'name': name,
        'location': location,
        'cuisine': cuisine
    }).save(function(err) {
        if (err) {
            res.send({ 'error': err });
        } else {
            Place.find({}, function(err, places) {
                if (err) {
                    res.send({ 'error': err });
                }
                res.send(places);
            });
        }
    });
});

module.exports = router;