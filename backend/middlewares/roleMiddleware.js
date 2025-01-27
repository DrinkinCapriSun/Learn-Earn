const roleMiddleware = (role) => {
    return (req, res, next) => {
      const userRole = req.user.role; // Assuming the user role is attached to the request object after authentication
      if (userRole !== role) {
        return res.status(403).json({ message: "Unauthorized access" });
      }
      next();
    };
  };
  
  module.exports = roleMiddleware;