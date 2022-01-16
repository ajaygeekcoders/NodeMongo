// use to log the menthos of api and the path of api

module.exports =  (req, res, next) => {
    console.log(`${req.method} - ${req.path}`);
    next();
}