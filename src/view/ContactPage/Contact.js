import React from "react";
import { Link } from "react-router-dom";
import img6 from "../../assets/image/img6.jpg";
import img7 from "../../assets/image/img7.jpg";
import img8 from "../../assets/image/img8.jpg";
import { ProductCard } from "../../components/Card";

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
            let { img, title, desc } = item;
            return (
              <div className="col-4">
                <ProductCard img={img} title={title} desc={desc} />
              </div>
            );
          })}
        </div>
      </div>
      <Link to="/">Back to Home</Link>
    </section>
  );
}
