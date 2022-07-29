import React from "react";
import { ProductCard } from "../../components/Card";
import img1 from "../../assets/image/img1.jpg";
export default function Products() {
  return (
    <section className="section-products">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <ProductCard
              img={img1}
              title="Product 1"
              desc="hello i am from product 1"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
