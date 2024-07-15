import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import router from './routes/posts.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files
app.use('/upload', express.static(path.join(__dirname, '../client/public/upload')));

// Parse incoming JSON requests
app.use(express.json());

// Define routes
app.use('/posts', router);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
