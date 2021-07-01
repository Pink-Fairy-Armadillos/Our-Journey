// const { ModuleFilenameHelpers } = require('webpack');
// const { db } = require('../model/schema');
const User = require('../model/userModel');

const pinController = {};

//create an update pin option
pinController.updatePins = (req, res, next) => {
  let newPins = []
  User.findOne({username: req.body.username})
    .then((user) => {
      // let newPins = []
      // if (req.body.action === 'DELETE'){
      //   user.pins.forEach((el) => {
      //     if (req.body._id !== el._id) {
      //       newPins.push(el)
      //     }
      //   })
      // }
      newPins = user.pins
    })
    .then(
      User.findOneAndUpdate({username: req.body.username}, {pins: [...newPins, req.body.pin]}, {new: true, omitUndefined: true})
      .then((newUser) => {
        console.log(newUser)
        res.locals.newPins = newUser.pins
        return next()
      }))
      .catch((err) => {
        return next({
          log: `Error in AddPin middleware: ${err}`,
          message: { err: 'An error occurred' }
      })}
      )
    .catch((err) => {
      return next({
        log: `Error in AddPin middleware: ${err}`,
        message: { err: 'An error occurred' },
      });
    });
};


//create an update message option
pinController.message = (req, res, next) => {

}



// tripController.addTrip = (req, res, next) => {
//   Trip.create({
//     name: req.body.name,
//     rating: req.body.rating,
//     review: req.body.review,
//     locationName: req.body.locationName,
//     location: req.body.location,
//     reviewDate: req.body.reviewDate,
//     tripDate: req.body.tripDate,
//   })
//     .then((data) => {
//       res.locals.newReview = data;
//       console.log(data);
//       return next();
//     })
//     .catch((err) => {
//       return next({
//         log: `Error in AddTrip middleware: ${err}`,
//         message: { err: 'An error occurred' },
//       });
//     });
// };

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

module.exports = pinController;
