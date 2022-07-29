import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/image/img1.jpg";

export function ServiceCard(props) {
  let { title, desc, img } = props;

  return (
    <div className="card-services">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="card-body">
        <h5>{title}</h5>
        <p className="mb-4 mt-3">{desc}</p>
        <Link to="/">Learn More</Link>
      </div>
    </div>
  );
}

export function TtestimonyCard(props) {
  let { title, desc, img } = props;

  return (
    <div className="card-services">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="card-body">
        <h5>{title}</h5>
        <p className="mb-4 mt-3">{desc}</p>
        <Link to="/">Learn More</Link>
      </div>
    </div>
  );
}

export function ProductCard(props) {
  let { title, desc, img } = props;

  return (
    <div className="card-01">
      <div className="media-wrapper">
        <img src={img} alt="" />
      </div>
      <div className="card-content">
        <h5>{title}</h5>
        <p>{desc}</p>
        <a href="#">Learn More</a>
      </div>
    </div>
  );
}
