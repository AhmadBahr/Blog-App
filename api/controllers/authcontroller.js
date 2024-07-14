import { db } from "../db.js";
import bcrypt from "bcryptjs";

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

