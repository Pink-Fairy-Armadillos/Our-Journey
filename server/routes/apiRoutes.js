const express = require('express');

const pinController = require('../controllers/pinController');
const avatarController = require('../controllers/avatarController');

const router = express.Router();

router.post('/pin', pinController.updatePins, (req, res) => {
  return res.status(200).json(res.locals.newPins);
});

router.post('/message', pinController.message, (req, res) => {
  //pinController.message not complete
  return res.statusMessage(200).json(res.locals.message)
});

router.post('/avatar', avatarController.setAvatar, (req, res) => {
  //avatarController not complete
  return res.status(200).json(res.locals.avatar)
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
