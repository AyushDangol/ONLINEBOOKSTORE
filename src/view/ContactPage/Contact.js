import React from "react";
import { Link } from "react-router-dom";
import img6 from "../../assets/image/img6.jpg";
import img7 from "../../assets/image/img7.jpg";
import img8 from "../../assets/image/img8.jpg";

export default function Contact() {
  const serviceData = [
    {
      img: img6,
      title: "Contact",
      desc: "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, molestiae amet? Iusto magnam voluptatibus impedit? Optio, impedit nemo amet obcaecati, ipsam quis quaerat reiciendis quidem rerum molestiae alias, consequuntur nisi.",
    },
    {
      img: img7,
      title: "Search",
      desc: "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, molestiae amet? Iusto magnam voluptatibus impedit? Optio, impedit nemo amet obcaecati, ipsam quis quaerat reiciendis quidem rerum molestiae alias, consequuntur nisi.",
    },
    {
      img: img8,
      title: "Communicate",
      desc: "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, molestiae amet? Iusto magnam voluptatibus impedit? Optio, impedit nemo amet obcaecati, ipsam quis quaerat reiciendis quidem rerum molestiae alias, consequuntur nisi.",
    },
    {
      img: img6,
      title: "Contact",
      desc: "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, molestiae amet? Iusto magnam voluptatibus impedit? Optio, impedit nemo amet obcaecati, ipsam quis quaerat reiciendis quidem rerum molestiae alias, consequuntur nisi.",
    },
    {
      img: img7,
      title: "Search",
      desc: "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, molestiae amet? Iusto magnam voluptatibus impedit? Optio, impedit nemo amet obcaecati, ipsam quis quaerat reiciendis quidem rerum molestiae alias, consequuntur nisi.",
    },
    {
      img: img8,
      title: "Communicate",
      desc: "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, molestiae amet? Iusto magnam voluptatibus impedit? Optio, impedit nemo amet obcaecati, ipsam quis quaerat reiciendis quidem rerum molestiae alias, consequuntur nisi.",
    },
  ];
  return (
    <section className="section-contact">
      <div className="container">
        <div className="row">
          {serviceData.map((item) => {
            return (
              <div className="col-4">
                <div className="card-01">
                  <div className="media-wrapper">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="card-content">
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                    <h6>2079/04/16</h6>
                    <a href="#">Learn More</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Link to="/">Back to Home</Link>
    </section>
  );
}
