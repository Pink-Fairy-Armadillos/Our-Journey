// const { ModuleFilenameHelpers } = require('webpack');
// const { db } = require('../model/schema');
const Trip = require('../model/userModel');

const tripController = {};

tripController.addTrip = (req, res, next) => {
  Trip.create({
    name: req.body.name,
    rating: req.body.rating,
    review: req.body.review,
    locationName: req.body.locationName,
    location: req.body.location,
    reviewDate: req.body.reviewDate,
    tripDate: req.body.tripDate,
  })
    .then((data) => {
      res.locals.newReview = data;
      console.log(data);
      return next();
    })
    .catch((err) => {
      return next({
        log: `Error in AddTrip middleware: ${err}`,
        message: { err: 'An error occurred' },
      });
    });
};

//   tripController.getLocation = (req, res, next) => {
//     Trip.find({}, { location: 1, reviewDate: 1 })
//       .then((data) => {
//         console.log('saved data', data);
//         res.locals.Locations = data;
//         return next();
//       })
//       .catch((err) => {
//         return next({
//           log: `Error in getLocation middleware: ${err}`,
//           message: { err: 'An error occured' },
//         });
//       });
//   }

module.exports = tripController;
