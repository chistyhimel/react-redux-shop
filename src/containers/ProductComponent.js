import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { fetchProducts } from "../redux/products/productActions";

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="four wide column">
      <div className="ui link cards">
        {products.length
          ? products.map((pd) => (
              <div
                className="card"
                key={pd.id}
                onClick={() => history.push(`/product/${pd.id}`)}
              >
                <div className="ui image">
                  <img
                    src={pd.image}
                    style={{ height: "300px", objectFit: "contain" }}
                    alt=""
                  />
                </div>
                <div className="content">
                  <div className="header">{pd.title}</div>
                  <div className="meta price">$ {pd.price}</div>
                  <div className="meta">{pd.category}</div>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default ProductComponent;
