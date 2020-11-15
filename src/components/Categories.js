import React from "react";
import "../components/Categories.css";

function Categories(prop) {
  return (
    <p style={{backgroundColor: prop.color}} className="Components">
      {prop.name}
    </p>
  );
}

export default Categories;
