import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCT_DETAILS, GET_BASIC_DETAILS } from "../GraphQL/Query";
import { useEffect, useState } from "react";

const ProductList = () => {
  let { data } = useQuery(GET_ALL_PRODUCT_DETAILS);
  let [productList, setProductList] = useState([]);

  useEffect(() => {
    if (data !== undefined) {
      setProductList(data.getProducts);
    }
  }, [data]);
  return (
    <>
      <section className="container-fluid">
        <section className="row justify-content-center">
          {productList.map((product, index) => {
            return (
              <article
                key={index}
                class="card col-3 gap-3 m-3"
                title={product.title}
              >
                <img
                  src={product.image}
                  class="card-img-top w-100"
                  style={{ height: "10rem" }}
                  alt={product.title}
                />
                <section class="card-body">
                  <h5 class="card-title">{product.title.substring(0, 20)}</h5>
                  <p class="card-text">Rs {product.price} /-</p>
                  <a href="#" class="btn btn-primary">
                    Explore
                  </a>
                </section>
              </article>
            );
          })}
        </section>
      </section>
    </>
  );
};

export default ProductList;
