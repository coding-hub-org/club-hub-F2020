import React from "react";
import Categories from "../components/Categories";

function About() {
  const categories = ["Math", "Science", "Writing", "Coding", "... see more"];
  const colors = ["#78D5BB", "#FFD049", "#F4486D", "#7A4865", "#CAD1D5"];

  return (
    <div>
      <div className="Categories">
        {categories.map((c_name, index) => (
          <Categories color={colors[index]} name={c_name} />
        ))}
      </div>
    </div>
  );
  
}

export default About;
