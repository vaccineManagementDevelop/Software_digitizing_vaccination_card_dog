// middleware/userAuth.js
import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.json({
      success: false,
      message: 'Not Authorized. Login Again',
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.id) {
      req.body.userId = decoded.id;
    } else {
      return res.json({
        success: false,
        message: 'Not Authorized. Login Again',
      });
    }

    next();
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export default userAuth; // Asegúrate de usar export default
