import express from "express";
import { getPosts, getPost, addPost, updatePost, deletePost } from "../controllers/postcontroller.js";

const router = express.Router();

// Get all posts
router.get("/", getPosts);

// Get a single post by ID
router.get("/:id", getPost);

// Add a new post
router.post("/", addPost);

// Update a post by ID
router.put("/:id", updatePost);

// Delete a post by ID
router.delete("/:id", deletePost);

export default router;
