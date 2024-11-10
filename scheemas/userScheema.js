import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    father_name: {
        type: String
    },
    degree: {
        type: String
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true // Ensure username is unique
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, "Email already exist"], // Ensure email is unique
        match: [
            /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
            'Please enter a valid email address'
        ]
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        match: [
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
            'Password must have at least one uppercase letter, one lowercase letter, one number, and one special character'
        ]
    }
}, { timestamps: true });  // Added timestamps for createdAt and updatedAt

export const UserScheema = mongoose.model("user", userSchema);
