import express from "express"
import { getPosts } from "../controllers/posts.js"

const router = express.Router();

router.get("/", getPosts)
router.post("/:id", getPost)
router.post("/", addPost)
router.put("/", updatePost)
router.delete("/", deletePost)
export default router