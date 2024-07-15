import { axios } from 'axios';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useLocation } from "react-router-dom";
import Menu from '../components/Menu';

const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation()

  const postId = location.pathname.split("/")[2];

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(`/posts/`);
        setPost(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getPost();
  }, [])
  return (
    <div className="single">
      <div className="content">
        <img src="https://randomwordgenerator.com/img/picture-generator/54e4d7434256a414f1dc8460962e33791c3ad6e04e5074417c2f7dd59748c3_640.jpg" alt="Main content" />
        <div className="user">
          <img src="https://randomwordgenerator.com/img/picture-generator/54e4d7434256a414f1dc8460962e33791c3ad6e04e5074417c2f7dd59748c3_640.jpg" alt="User" />
          <div className="info">
            <span>John Doe</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="Edit" />
            </Link>
            <img src={Delete} alt="Delete" />
          </div>
        </div>
        <h1>
          The Impact of Technology on Modern Education
        </h1>
        <p>
          Technology has significantly transformed the landscape of modern education. With the advent of digital tools and resources, students now have access to a wealth of information at their fingertips. Online learning platforms, virtual classrooms, and interactive content have made education more accessible and engaging. This shift has enabled personalized learning experiences, allowing students to learn at their own pace and according to their individual needs.
        </p>
        <p>
          Instructors also benefit from technology by using advanced tools to enhance their teaching methods. Interactive whiteboards, educational software, and online assessment tools provide new ways to engage students and assess their progress. These tools not only make learning more interactive but also help in tracking and analyzing student performance to tailor instruction effectively.
        </p>
        <p>
          Moreover, technology fosters collaboration among students. Through online forums, group projects, and communication tools, students can easily connect and work together, regardless of geographical barriers. This collaborative approach prepares students for the modern workforce, where teamwork and digital literacy are essential skills.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
