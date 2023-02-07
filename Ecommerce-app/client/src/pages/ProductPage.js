import axios from "../services/axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Badge } from "react-bootstrap";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {  useParams } from "react-router-dom";
import Loading from "../components/Loading";
import "./ProductPage.css";
// import { LinkContainer } from "react-router-bootstrap";
// import ToastMessage from "../components/ToastMessage";

function ProductPage() {
  const { id } = useParams();
  const user = useSelector((state) => state.user);
  const [product, setProduct] = useState(null);
  const [setSimilar] = useState(null);
  const navigate = useNavigate();
  
  const handleDragStart = (e) => e.preventDefault();
  useEffect(() => {
    axios.get(`/products/${id}`).then(({ data }) => {
      setProduct(data.product);
    });
  }, [id, setSimilar]);

  if (!product) {
    return <Loading />;
  }
  
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  
  function deleteHandler() {
    axios
      .delete(`http://localhost:8000/products/${id}`)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  const images =
    product.pictures &&
    product.pictures.map((picture) => (
      <img
        alt=""
        className="product__carousel--image"
        src={picture.url}
        onDragStart={handleDragStart}
      />
    ));

  return (
    <Container className="pt-4" style={{ position: "relative" }}>
      <Row className="rowww">
        <div className="imgggg ">
          <img alt=" " src="" />
          <Col lg={6}>
            <AliceCarousel
              mouseTracking
              items={images}
              controlsStrategy="alternate"
            />
          </Col>
        </div>
        <Col lg={6} className="pt-4">
          <h1>{product.name}</h1>
          <p>
            <Badge bg="primary">{product.category}</Badge>
          </p>
          <p className="product__price">${product.price}</p>
          <p style={{ textAlign: "justify" }} className="desc">
            <strong>Description:</strong> {product.description}
          </p>
          {user && (
            <div style={{ width: "90%" }}>
              <Form.Select
                className="selectt"
                size="lg"
                style={{ width: "40%", borderRadius: "0" }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Select>
            </div>
          )}
          <Button className="btnn">Add to cart</Button>
          {user && !user.isAdmin && (
            <div>
              <Button onClick={deleteHandler} className="bttn">
                Delete Product
              </Button>
            </div>
          )}
          {/* {isSuccess && (
            <ToastMessage
              bg="info"
              title="Added to cart"
              body={`${product.name} is in your cart`}
            />
          )} */}
        </Col>
      </Row>
    </Container>
  );
}

export default ProductPage;
