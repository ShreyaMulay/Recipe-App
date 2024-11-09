// const jwt = require('jsonwebtoken');
// const User = require('../models/User'); // Adjust the path as needed


// module.exports = function (req, res, next) {
//   const token = req.header('x-auth-token');
//   console.log("token",token)

//   if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     console.log("decoded",decoded)
//     req.user = decoded;
//     next();
//   } catch (err) {
//     console.log(err);
//     res.status(401).json({ msg: 'Token is not valid' });
//   }
// };



const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Adjust the path as needed

const auth = async (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.userId).select('-password'); // Exclude password from user object
    next();
  } catch (err) {
    console.error("err",err);
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

module.exports = auth;
