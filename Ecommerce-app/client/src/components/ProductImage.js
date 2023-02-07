import React from "react";

const ProductImage = ({ images }) => {
  return (
    <div>
      {images.map((image, index) => (
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <img key={index} src={image} alt={`Product image ${index + 1}`} />
      ))}
    </div>
  );
};

export default ProductImage;
