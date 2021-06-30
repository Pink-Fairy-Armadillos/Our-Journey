const express = require('express');

const tripController = require('../controllers/tripController');

const router = express.Router();

router.get('/', tripController.getLocation, (req, res) => {
  console.log(res.locals.Locations);
  return res.status(200).json(res.locals.Locations);
});

router.post('/', tripController.addTrip, (req, res) => {
  return res.status(200).json(res.locals.newReview);
});

router.get('/:id', tripController.getReview, (req, res) => {
  return res.status(200).json(res.locals.Review);
});

router.delete('/:id', tripController.deleteReview, (res, req) => {
  return res.status(200).json(res.locals.Review);
});

module.exports = router;
