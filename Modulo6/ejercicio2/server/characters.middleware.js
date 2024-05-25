const characterMiddleware = (req, res, next) => {
  if (req.method === "POST") {
    console.log(`${req.method} ${req.url}`);
  }
  next();
};

module.exports = (req, res, next) => {
  characterMiddleware(req, res, next);
};
