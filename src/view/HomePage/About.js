import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/image/img1.jpg";
import img2 from "../../assets/image/img2.jpg";
import img3 from "../../assets/image/img3.jpg";
import { ServiceCard, TtestimonyCard } from "../../components/Card";

export default function About() {
  const serviceList = [
    {
      title: "Our internal process and long term vision",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.",
      img: img1,
    },
    {
      title: "Our internal process and long term vision",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.",
      img: img2,
    },
    {
      title: "Our internal process and long term vision",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.",
      img: img3,
    },
  ];
  return (
    <section className="section-about">
      <div className="container">
        <div className="row">
          {serviceList.map((item) => {
            let { title, desc, img } = item;

            return (
              <div className="col-lg-4">
                <ServiceCard title={title} desc={desc} img={img} />
              </div>
            );
          })}
          {serviceList.map((item) => {
            let { title, desc, img } = item;

            return (
              <div className="col-lg-4">
                <TtestimonyCard title={title} desc={desc} img={img} />
              </div>
            );
          })}
          {/* <div className="col-lg-4">
            <ServiceCard
              title="Our internal process and long term vision"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et."
              img={img1}
            />
          </div>
          <div className="col-lg-4">
            <ServiceCard
              title="Our internal process and long term vision"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et."
              img={img2}
            />
          </div>
          <div className="col-lg-4">
            <ServiceCard
              title="Our internal process and long term vision"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et."
              img={img3}
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}
