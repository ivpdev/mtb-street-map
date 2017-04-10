var config = {};

if (process.env.MONGO_URL) {
    config.mongoUrl = process.env.MONGO_URL;
} else {
    console.error('MONGO_URL environment variable is not set')
}

module.exports = config;