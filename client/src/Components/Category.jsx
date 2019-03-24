import React from "react";
import { Link, Route } from "react-router-dom";

const Category = ({ match }) => {
  return (
    <div>
      {" "}
      <ul>
        <li>
          <Link to={`${match.url}/belts`}>Belts</Link>
        </li>
        <li>
          <Link to={`${match.url}/harness`}>Harness</Link>
        </li>
        <li>
          <Link to={`${match.url}/clothes`}>Clothes</Link>
        </li>
      </ul>
      <Route
        path={`${match.path}/:name`}
        render={({ match }) => (
          <div>
            {" "}
            <h3> {match.params.name} </h3>
          </div>
        )}
      />
    </div>
  );
};

export default Category;
