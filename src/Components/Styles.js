import React, { useState } from "react";
import "../Scss/Styles.scss";
import rockPhoto from "../Images/Rock style.png";
import professorPhoto from "../Images/Professor style.png";
import bakerPhoto from "../Images/Baker style.png";
import nutonPhoto from "../Images/Nuton style.png";
import machoPhoto from "../Images/Macho style.png";
import hipsterPhoto from "../Images/Hipster style.png";
import rengerPhoto from "../Images/Renger style.png";
import rockstarPhoto from "../Images/Rockstar style.png";



const stylesData = [
  { title: "The Rock", price: "$10 - $15", category: "Haircuts", img: rockPhoto },
  { title: "The Professor", price: "$10 - $20", category: "Beard", img: professorPhoto },
  { title: "The Baker", price: "$15 - $25", category: "Mustache", img: bakerPhoto },
  { title: "The Nuton", price: "$10 - $20", category: "Mustache", img: nutonPhoto },
  { title: "The Macho", price: "$15 - $30", category: "Haircuts", img: machoPhoto },
  { title: "The Hipster", price: "$15 - $25", category: "Beard", img: hipsterPhoto },
  { title: "The Renger", price: "$10 - $20", category: "Haircuts", img: rengerPhoto },
  { title: "The Rock Star", price: "$10 - $20", category: "Beard", img: rockstarPhoto },
];



const categories = ["All", "Beard", "Haircuts", "Mustache"];

const Styles = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredStyles =
    selectedCategory === "All"
      ? stylesData
      : stylesData.filter((style) => style.category === selectedCategory);

  return (
    <section id="styles" className="styles-section">
      <h2 className="styles-title">Styles</h2>
       <div className="divider"></div>
      <p className="styles-subtitle">
       Style is the silent ambassador of your personality. Let your look do the talking.
      </p>

      <div className="styles-filters">
        {categories.map((cat) => (
          <span
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </span>
        ))}
      </div>

      <div className="styles-grid">
         {filteredStyles.map((style, index) => (
         <div className="style-card" key={index}>
            <div className="style-icon">
               <img src={style.img} alt={style.title} />
            </div>
            <h3>{style.title}</h3>
            <p>{style.price}</p>
         </div>
         ))}
      </div>

    </section>
  );
};

export default Styles;
