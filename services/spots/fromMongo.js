var monk = require('monk')
var config = require('../../config')

var getAllFromMongo = function() {
    return new Promise((resolve, reject) => {
                monk(config.mongoUrl)
                    .then((db) => {
                           db.get('spots').find({}, {sort: {name: 1}})
                                .then(function (spots) {
                                    resolve(spots)
                                })
                                .catch((err) => reject(err))
                           })
                           .catch((err) => {
                                reject(err) })})}