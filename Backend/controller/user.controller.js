import User from "../model/user.model.js";
import bcrypt from "bcrypt";
export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashPass = await bcrypt.hash(password, 10);

    const createUser = new User({
      fullname,
      email,
      password: hashPass,
    });

    await createUser.save();
    res.status(201).json({
      message: "User created successfully",
      users: {
        _id: createUser._id,
        fullname: createUser.fullname,
        email: createUser.email,
      },
    });
  } catch (error) {
    console.log("Error " + error.message);
    res.status(500).json({ message: "Internal Server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const isUser = await User.findOne({ email });

    if (isUser) {
      const isMatch = await bcrypt.compare(password, isUser.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
      res.status(200).json({
        message: "Login successfull",
        user: {
          _id: isUser._id,
          fullname: isUser.fullname,
          email: isUser.email,
        },
      });
    } else {
      console.log("User does not exists");
      res.status(400).json({ message: "User does not exists" });
    }
  } catch (error) {
    console.log("Error" + error.message);
    res.status(500).json({ message: "Interal server error" });
  }
};
