'user strict';

var mongoose = require('mongoose'),
  jwt = require('jsonwebtoken'),
  score = mongoose.model('Score');

// add score for 1 person
  exports.add_score = function(req, res) {
    Score.findOne({
    evaluator: req.body.evaluator,
    exhibit: req.body.exhibit
  }, function(err, user) {
      if (err)  throw err;
      if (!user) {
        var newScore = new Score(req.body);
        newScore.save(function(err, user) {
          if (err) {
            return res.status(400).send({
              message: err, status:'400'
            });
          } else {
            return res.json({message: 'score entry saved successfully', status:'200'});
            }
        });
    } else if (user) {
      console.log("");
      res.status(401).json({ message: 'this score entry already exists, please use edit score to edit the scores', status: '401' });
    }
  });
};



//
//   exports.register_patient = function(req, res) {
//     var newUsername = jwt.decode(req.headers.authorization);
//     console.log(newUsername);
//     var string = JSON.stringify(newUsername);
//     var objectValue = JSON.parse(string);
//     var getuser = objectValue['username'];
//
//     Admin.findOne({
//       username: getuser
//     }, function(err, user){
//       if (err) throw err;
//       if (!user) {
//         console.log('2');
//         res.status(401).json({ message: 'you do not have the admin priviliges', status: '401'});
//       } else if (user) {
//         Patient.findOne({
//           username: req.body.username
//         }, function(err, patient) {
//           if (err) throw err;
//           if (!patient){
//             var newPatient = new Patient(req.body);
//             newPatient.save(function(err, patient) {
//               if (err) {
//                 return res.status(400).send({message: err, status:'400'});
//               } else {
//                 return res.json({username: newPatient.username , message: 'Patient Created', status:'200'});
//               }
//             });
//           } else {
//             return res.json({message: "this username already exists, select sowmthing else", status:'400'});
//           }
//         });
//
//           }
//   });
// };
//
// exports.patient_login = function(req, res) {
//   Patient.findOne({
//     username: req.body.username,
//     password: req.body.password
//   }, function(err, patient) {
//     if (err) throw err;
//     if (!patient) {
//       res.status(401).json({ message: 'Authentication failed. User not found.', status: '401' });
//     } else if (patient) {
//         return res.json({token: jwt.sign({ username: patient.username}, 'secretkey'), message: "user successfully logged in", status:'200'});
//     }
//   });
// };
//
// exports.all_patient_data = function(req, res) {
//   var newUsername = jwt.decode(req.headers.authorization);
//   console.log(newUsername);
//   var string = JSON.stringify(newUsername);
//   var objectValue = JSON.parse(string);
//   var getuser = objectValue['username'];
//
//   Admin.findOne({
//     username: getuser
//   }, function(err, user){
//     if (err) throw err;
//     if (!user) {
//       console.log('2');
//       res.status(401).json({ message: 'you do not have the admin priviliges', status: '401'});
//     } else if (user) {
//       mongoose.connection.collection("patients").find().toArray(function(err, data) {
//           res.send(data);
//         })
//       }
//     });
//       };
