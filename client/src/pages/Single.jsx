import React from "react";
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://randomwordgenerator.com/img/picture-generator/54e4d7434256a414f1dc8460962e33791c3ad6e04e5074417c2f7dd59748c3_640.jpg"></img>
        <div className="user">
          <img src="https://randomwordgenerator.com/img/picture-generator/54e4d7434256a414f1dc8460962e33791c3ad6e04e5074417c2f7dd59748c3_640.jpg"></img>
          <div className="info">
            <span>John Doe</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <img src={Edit} alt = ""/>
            <img src={Delete} alt=""/>
          </div>
        </div>
      </div>
      <div className="menu">m</div>
    </div>
  );
};

export default Single;
