const errorHandler = (err, req, res, next) => {
    if (err.name === "ValidationError") {
      const errors = Object.values(err.errors).map((el) => el.message);
      return res.status(400).json({ message: "Validation Error", errors });
    }
    res.status(500).json({ message: "Server Error", error: err.message });
  };
  
  module.exports = errorHandler;