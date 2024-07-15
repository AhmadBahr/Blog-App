import { useNavigate } from 'react-router-dom';
import { axios } from 'axios';
import { Navigate, useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useLocation } from "react-router-dom";
import Menu from '../components/Menu';
import moment from "moment";
import { AuthContext } from '../context/authContext';

const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation();
  const Navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getPost();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      Navigate("/")
    } catch (err) {
      console.log(err);
    }
  };

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="single">
      <div className="content">
        <img src={`../upload/${post?.img}`} alt="Main content" />
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="User" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser?.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img src={Edit} alt="Edit" />
              </Link>
              <img onClick={handleDelete} src={Delete} alt="Delete" />
            </div>
          )}
        </div>
        <h1>
          {post.title}
        </h1>
        {getText(post.desc)}
      </div>
      <Menu cat={post.cat} />
    </div>
  );
};

export default Single;
