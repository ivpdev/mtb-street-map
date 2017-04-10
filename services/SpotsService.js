var mongoose = require('mongoose');






var SpotsService = {
    getAll: function() {
      function connectToDatabase() {
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



        return [4,5,6];
    }
}

module.exports = SpotsService;
