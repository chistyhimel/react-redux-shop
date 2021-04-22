import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import {
  fetchProductDetails,
  removeSelectedProduct,
} from "../redux/products/productActions";

function ProductDetails() {
  const { productId } = useParams();
  const selectedProduct = useSelector((state) => state.selectedProduct.product);
  //   const { image, title, price, category, description } = selectedProduct;
  const dispatch = useDispatch();
  console.log(selectedProduct);
  useEffect(() => {
    dispatch(fetchProductDetails(productId));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, []);
  return (
    <div className="ui grid container">
      {productId && selectedProduct.length ? (
        <p>loading...</p>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img
                  className="ui fluid image"
                  alt=""
                  src={selectedProduct.image}
                />
              </div>
              <div className="column rp">
                <h1>{selectedProduct.title}</h1>
                <h2>
                  <span className="ui teal tag label">
                    ${selectedProduct.price}
                  </span>
                </h2>
                <h3 className="ui brown block header">
                  {selectedProduct.category}
                </h3>
                <p>{selectedProduct.description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
