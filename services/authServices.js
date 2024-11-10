import connectDb from "../configurations/mongo_config.js";
import { UserScheema } from "../scheemas/userScheema.js";

export const authServices = {
  addUser: async (req,res) => {
    try {
      await connectDb();
      const { name, father_name, degree, username, email, password } = req.body;

      const newUser = new UserScheema({
        name,
        father_name,
        degree,
        username,
        email,
        password,
      });
      const result = await newUser.save();
      console.log("result", result);

      return res.json({
        message: "User added successfully",
        user: result,
      });
    } catch (error) {
      console.error("Error adding user:", error);

      let errors = []; 
      if (error.code === 11000) {
        const field = Object.keys(error.keyValue)[0]; 
        const value = error.keyValue[field];
        const errorMessage = `${field} with value '${value}' already exists`;
        errors.push(errorMessage);  
      }

      if (error.name === "ValidationError") {
        Object.values(error.errors).forEach(err => {
          errors.push(err.message); 
        });
      }
      if (errors.length > 0) {
        return res.status(400).json({
          message: "Validation failed or duplicate keys",
          errors: errors  
        });
      }
      return res.status(500).json({
        message: "Server error",
        error: error.message
      });
    
    }
  },
};
