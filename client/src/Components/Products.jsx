import React from "react";
import { Link, Route } from "react-router-dom";
import Product from "./Product";
import productsData from "../assets/productsData";

const Products = ({ match }) => {
  var linkList = productsData.map(product => {
    return (
      <li key={product.id}>
        <Link to={`${match.url}/${product.id}`}>{product.name}</Link>
      </li>
    );
  });

  return (
    <div>
      <div style={{ display: "block", justifyContent: "space-between" }}>
        <div
          style={{
            float: "left",
            padding: "10px",
            width: "30%",
            background: "#f0f0f0",
            marginLeft: "auto"
          }}
        >
          <h3> Products</h3>
          <ul style={{ listStyleType: "none", padding: 0, fontSize: "15px" }}>
            {" "}
            {linkList}{" "}
          </ul>
        </div>
      </div>

      <Route
        path={`${match.url}/:productId`}
        render={props => <Product data={productsData} {...props} />}
      />
      <Route
        exact
        path={match.url}
        render={() => (
          <div style={{ textAlign: "center" }}>Please select a product.</div>
        )}
      />
    </div>
  );
};

export default Products;
