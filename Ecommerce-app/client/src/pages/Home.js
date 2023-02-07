import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Categories from "../Categories";
import { LinkContainer } from "react-router-bootstrap";
// import Slideshow from "../components/Slidables";
import { useEffect } from "react";
import "./Home.css";
import axios from "../services/axios";
import { updateProducts } from "../features/productsPicaSlices";
import ProductPreviw from "../components/ProductPreviw";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const lastProducts = products.slice(0, 8);
  useEffect(() => {
    axios.get("/products").then(({ data }) => dispatch(updateProducts(data)));
  }, [dispatch]);
  // console.log(products);
  console.log(lastProducts);
  return (
    <div>
      <img
        alt=""
        src=" https://res.cloudinary.com/learn-code-10/image/upload/v1653947013/yqajnhqf7usk56zkwqi5.png"
        className="home-banner"
      />
      <div className="featured-products-container container mt-4">
        <h2>Last products</h2>
        {/* last products here */}
        <div className="d-flex justify-content-center flex-wrap">
          {lastProducts &&
            lastProducts.map((products) => <ProductPreviw {...products} />)}
        </div>
        <div>
          
          <Link
            to="/new-product"
            style={{
              textAlign: "right",
              display: "block",
              textDecoration: "none",
            }}
          >
            Create Product {">>"}
          </Link>
        </div>
      </div>
      {/* sale banner */}
      <div className="sale__banner--container mt-4">
        {/* <Slideshow /> */}
        <img
          className="bannerx"
          alt=""
          src="https://static.vecteezy.com/system/resources/thumbnails/002/478/302/small/sale-electronics-banner-background-free-vector.jpg"
          // src="https://c8.alamy.com/comp/2G61GTE/mega-sale-advertiving-banner-with-3d-illustration-of-dofferent-home-and-smart-electronic-devices-discount-up-to-fifty-2G61GTE.jpg"
          // src="https://thumbs.dreamstime.com/b/cyber-monday-banner-circuit-background-big-technology-sale-cyber-monday-banner-circuit-background-big-technology-sale-102114137.jpg"
        />
      </div>
      {/* <div>
        <Slideshow />
      </div> */}
      <div className="recent-products-container container mt-4">
        <h2>Categories</h2>
        <Row>
          {Categories.map((category, index) => (
            <LinkContainer
              key={index}
              to={`/category/${category?.name.toLocaleLowerCase()}`}
            >
              <Col md={4}>
                <div
                  // key={index + 1}
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category?.img})`,
                    gap: "10px",
                  }}
                  className="category-tile"
                >
                  {category?.name}
                </div>
              </Col>
            </LinkContainer>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;
