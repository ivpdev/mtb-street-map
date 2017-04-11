var monk = require('monk')
var config = require('../config')

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

var spotsData = [{
    title: 'Skinny bench',
    description: 'Relatively easy skinny (broad, not high from the ground)',
    position: {
        lat: 48.132629, lng: 11.614861
    }
}]

var getAllHardcoded = function() {
    return new Promise((resolve, reject) => {
        resolve(spotsData)
    });
}

var SpotsService = {
    getAll: function() {
        return getAllHardcoded() }}



module.exports = SpotsService;
