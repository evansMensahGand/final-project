const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");

exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.create({
      username,
      email,
      password,
    });

    sendToken(user, 201, res);
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return  next(new ErrorResponse("Please provide and email and password"));
  }

  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return  next(new ErrorResponse("Invalid credentials", 404)); 
    }

    const isMatch = await user.matchPasswords(password);

    if (!isMatch) {
      return next(new ErrorResponse("Invalid credentials", 401)); 
    }

    sendToken(user, 200, res);

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.forgotPassword = (req, res, next) => {
  res.send("Forgot Password Route");
};

exports.resetPassword = (req, res, next) => {
  res.send("Reset Password Route");
};


const sendToken = (user, statusCode, res) =>{
  const token = user.getSignedToken();
  res.status(statusCode).json({success:true,token})
}

// const User = require("../models/User");
// const httpErrors = require("http-errors");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const { registerValidator, loginValidator } = require("../utils/validation");

// const register = async (req, res) => {
//   console.log(req.body);
//   try {
//     const result = await registerValidator.validateAsync(req.body);
//     const { firstName, lastName, email, password } = result;

//     const alreadyExists = await User.findOne({ email });
//     if (alreadyExists) {
//       throw new Error("Email already in use.");
//     }

//     const hashedPassword = await bcrypt.hash(password, 12);
//     const user = await User.create({
//       firstName,
//       lastName,
//       email,
//       password: hashedPassword,
//     });
//     res.status(201).json({ user });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// const login = async (req, res) => {
//   try {
//     const result = await loginValidator.validateAsync(req.body);
//     const { email, password } = result;

//     let user = await User.findOne({ email });
//     if (!user) {
//       throw new Error("Invalid Credentials");
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       throw new Error("Invalid Credentials");
//     }

//     const token = jwt.sign({ id: user._id }, "123456789", { expiresIn: "2h" });
//     res.status(200).json({ token });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// const verifyToken = (req, res, next) => {
//   let token = req.headers["authorization"] || "";
//   token = token.split(" ")[1];

//   if (token) {
//     const decodedToken = jwt.verify(token, "123456789");
//     req.user = decodedToken.id;
//     next();
//   } else {
//     res.status(403).json({ message: "Unauthorized" });
//   }
// };

// module.exports = {
//   register,
//   login,
//   verifyToken,
// };
