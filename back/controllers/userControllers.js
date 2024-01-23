const User = require("../models/User");
const Session = require("../models/Session");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { JWT_SECRET } = require("../config/env");
const { mongo } = require("mongoose");

// Register a new user
exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the email is already in use
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    // create a session for the user
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "24h",
    });
    const newSession = new Session({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      token,
      createdAt: new Date(),
      expiredAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
    });
    await newSession.save();

    res
      .status(201)
      .json({ message: "User created successfully", session: newSession });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
};

// Login user
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "24h",
    });
    // create a session for the user
    const newSession = new Session({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
      token,
      createdAt: new Date(),
      expiredAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
    });
    await newSession.save();

    await newSession.save();
    res.status(200).json({ message: "Login successful", session: newSession });
  } catch (error) {
    res.status(500).json({ message: "Error logging in user", error });
  }
};

// Logout user
exports.logoutUser = async (req, res) => {
  try {
    const { userId } = req.user; // userId is added to req by the auth middleware
    await Session.deleteMany({ userId: userId });
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    res.status(500).json({ message: "Error logging out user", error });
  }
};

// Get user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user", error });
  }
};

// Update user information
exports.updateUser = async (req, res) => {
  try {
    const updateData = req.body;
    const user = await User.findByIdAndUpdate(req.params.userId, updateData, {
      new: true,
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Error updating user", error });
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
};

// List all users
exports.listUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};

// Change user password
exports.changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const user = await User.findById(req.params.userId);
    if (!user || !(await bcrypt.compare(oldPassword, user.password))) {
      return res.status(401).json({ message: "Invalid current password" });
    }
    const hashedNewPassword = await bcrypt.hash(newPassword, 12);
    user.password = hashedNewPassword;
    await user.save();
    res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error changing password", error });
  }
};
