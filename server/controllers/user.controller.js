const {
  AppError,
  catchAsync,
  sendResponse,
} = require("../helpers/utils.helper");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

const userController = {};

userController.register = catchAsync(async (req, res, next) => {
  let { name, email, password } = req.body;
  let user = await User.findOne({ email });
  if (user)
    return next(new AppError(400, "User already exists", "Registration Error"));

  const salt = await bcrypt.genSalt(10);
  password = await bcrypt.hash(password, salt);

  user = await User.create({ name, email, password, avatarUrl });
  const accessToken = await user.generateToken();
  return sendResponse(
    res,
    200,
    true,
    { user, accessToken },
    null,
    "Create User Successful"
  );
});

userController.getCurrentUser = catchAsync(async (req, res, next) => {
  const userId = req.userId;
  const user = await User.findById(userId);
  if (!user)
    return next(new AppError(400, "User not found", "Get Current User Error"));
  return sendResponse(res, 200, true, user, null, "Get current user sucessful");
});

// userController.getUsers = catchAsync(async (req, res, next) => {
//   let { page, limit, sortBy, ...filter } = req.query;
// });
module.exports = userController;
