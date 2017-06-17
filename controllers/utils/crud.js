var User = require("../../models/master.js"),
    crud = {
      create: (token) => {
        // console.log("create new user");
        var entry = new User({
              token_Sub: token.sub,
              first_name: token.first_name,
              last_name: token.last_name,
              profile_image: token.image_url
          });
          entry.save((err, results) => {
            if (err){
              console.log("crud error create: " + err);

            }
            else {
              console.log("successfully created: " + results);
              return (results);
            }
          });
      },
      read: (subject, cb) => {
        // console.log("find user");
        // takes in the token sub (subject) and searches for entries that match
        User.find({tokenSub: subject}).exec((err, results) => {
          // log error if there is a read error
          if (err) {
            console.log("crud error read: " + err);
          }

          cb(results);
        });
      },
      update: (updates) => {
        // console.log("update user");
        // updates the user by array of objects updates must
        // recieve a method like $set: or $push: followed by the object to change

        User.findOneAndUpdate({ "token_sub": updates.token.sub }, updates.update)
        .exec((err, results) => {
          if (err) {
            console.log("crud error update: " + err);

          }
          else {
            console.log("successfully updated: " + results);
            return (results);
          }
        });
      },
      delete: (deletes) => {
        // console.log("delete user data");
        // deletes the user info by array of objects updates must
        // recieve a method like $pop: or $pull: followed by the object to change
        User.findOneAndUpdate({ "token_sub": deletes.token.sub }, deletes.delete)
        .exec((err, results) => {
          if (err) {
            console.log("crud error delete: " + err);

          }
          else {
            console.log("successfully deleted: " + results);
            return (results);
          }
        });
      }

    }; // end of crud object

    module.exports = crud;
