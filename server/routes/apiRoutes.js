const express = require('express');

const tripController = require('../controllers/tripController');

const router = express.Router();

router.post('/', tripController.addTrip, (req, res) => {
  return res.status(200).json(res.locals.newReview);
});


//get all of users pins from the database
// router.get('/pins', tripController.getPins, (req, res) => {
//   console.log(res.locals.Pins);
//   return res.status(200).json(res.locals.Pins);
// });

//delete a pin from the database
// router.put('/pins', tripController.deletePin, (req, res) => {
//   console.log(res.locals.Pins);
//   return res.status(200).json(res.locals.Pins);
// })

// old code for getting locations
// router.get('/', tripController.getLocation, (req, res) => {
//   console.log(res.locals.Locations);
//   return res.status(200).json(res.locals.Locations);
// });

module.exports = router;
