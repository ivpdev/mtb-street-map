var monk = require('monk')







var SpotsService = {
    getAll: function() {
        const db = monk('mongodb://admin:mT8mapp@ds151060.mlab.com:51060/mtb-street-map')
            .then( (db) => {
                    console.log('connected')

                   const spots = db.get('spots');

                   debugger

                    spots.find({}, {sort: {name: 1}}).then(function (x) {
                              console.log('123');
                              console.log(x);
                            })





            } )
            .catch((err) => {
                console.log('dberror')
                console.log(err)
            });


        console.log('!!test');



        //db.close();


      /*function connectToDatabase() {
        var options = {};
        // return connection property from mongoose.connect call
        return mongoose.connect('mongodb://localhost/test', options).connection;
      };

    connectToDatabase()
      .on('error', function() {
        console.log('xxx')

      })
      // reconnect
      .on('disconnected', connectToDatabase)
      // we use once because we don't want to add new listener after disconnected
      .once('open', () => app.listen(PORT));
*/


        return [4,5,6];
    }
}

module.exports = SpotsService;
