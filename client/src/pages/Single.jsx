import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from '../components/Menu'

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
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
          voluptatibus ullam harum sunt, praesentium minus deleniti libero aut
          rem adipisci quisquam natus culpa dolorum soluta pariatur quos? Nisi,
          possimus id.
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor fugiat
          porro dicta exercitationem dolorum repudiandae tenetur natus. Quae
          repellendus, facere, asperiores debitis aperiam quisquam nam quas eos
          saepe, est harum.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
          delectus labore provident, autem alias asperiores aliquam incidunt
          praesentium. Dicta, doloremque ratione corrupti error minus ullam enim
          dolore? Assumenda, consequuntur aliquam.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
