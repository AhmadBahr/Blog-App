import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
    console.log("Register endpoint hit");

    const q = "SELECT * FROM users WHERE email = ? OR username = ?";
    db.query(q, [req.body.email, req.body.username], (err, data) => {
        if (err) {
            console.error("Error selecting user:", err);
            return res.status(500).json({ error: "Database query error", details: err });
        }
        if (data.length) {
            console.log("User already exists");
            return res.status(409).json("User already exists!");
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
        const values = [req.body.username, req.body.email, hash];

        db.query(q, [values], (err, data) => {
            if (err) {
                console.error("Error inserting user:", err);
                return res.status(500).json({ error: "Database insertion error", details: err });
            }
            console.log("User created successfully");
            return res.status(200).json("User has been created");
        });
    });
};

export const login = (req, res) => {
    console.log("Login endpoint hit");

    const q = "SELECT * FROM users WHERE username = ?";
    db.query(q, [req.body.username], (err, data) => {
        if (err) {
            console.error("Error selecting user:", err);
            return res.status(500).json({ error: "Database query error", details: err });
        }
        if (data.length === 0) {
            console.log("User not found");
            return res.status(404).json("User not found!");
        }

        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);
        if (!isPasswordCorrect) {
            console.log("Wrong password");
            return res.status(400).json("Wrong username or password!");
        }

        const token = jwt.sign({ id: data[0].id }, "jwtkey");
        const { password, ...other } = data[0];

        res.cookie("access_token", token, {
            httpOnly: true,
            sameSite: "strict", // Adjusted for security
            secure: process.env.NODE_ENV === "production", // Only use secure cookies in production
        }).status(200).json(other);

        console.log("User logged in successfully");
    });
};

export const logout = (req, res) => {
    res.clearCookie("access_token", {
        httpOnly: true,
        sameSite: "strict", // Adjusted for security
        secure: process.env.NODE_ENV === "production", // Only use secure cookies in production
    }).status(200).json("User has been logged out");

    console.log("User logged out successfully");
};
