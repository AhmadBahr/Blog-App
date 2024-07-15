import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`); // Adjust the endpoint based on your backend API
        setPosts(res.data); // Assuming res.data is an array of posts
      } catch (err) {
        console.error('Error fetching posts:', err);
      }
    };

    fetchData();
  }, [cat]); // Trigger fetch when `cat` prop changes

  return (
    <div className="menu">
      <h1>Other Posts You May Like</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id} className="post-item">
            <img src={`../upload/${post?.img}`} alt={post.title} className="post-image" />
            <h2 className="post-title">{post.title}</h2>
            <p className="post-description">{post.description}</p>
            <button className="read-more">Read More</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
