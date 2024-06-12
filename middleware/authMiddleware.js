import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(403).json({ error: "no token" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(500).json({ error: "can not authenticate token" });
    }
    req.userId = decoded.userId;
    next();
  });
};

export { verifyToken };
