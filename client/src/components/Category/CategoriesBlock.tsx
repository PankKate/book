import React, { useState } from "react";
import Category from "./Category";
import { useNavigate } from "react-router-dom";
import categories from "../../data/categoryData";

function CategoriesBlock(): JSX.Element {
  const header: string = "Find Your Next Book";
  const [status, setStatus] = useState<string>("📚✏️☕");
  const imageBasePath =
    window.location.protocol + "//" + window.location.host + "/UI_Elements/";

 

  function changeCategory(title: string): void {
    setStatus(categories[title].status);
  }

  return (
    <section className="categoriesBlock">
      <img src={imageBasePath + "shape-32-A.png"}></img>
      <img src={imageBasePath + "shape-32.png"}></img>
      <span>{status}</span>

      {Object.keys(categories)
        .slice(0, 9)
        .map((categ, i) => (
          <Category
            key={i}
            title={categ}
            genre={categories[categ].genre}
            changeCategory={changeCategory}
          ></Category>
        ))}

      <section className="promo">
        <Category
          key={10}
          title={"Fantasy"}
          genre={categories["Fantasy"].genre}
          changeCategory={changeCategory}
        />
        <header className="promo_title">{header} </header>
        <Category
          key={11}
          title={"Horror"}
          genre={categories["Horror"].genre}
          changeCategory={changeCategory}
        />
      </section>

      {Object.keys(categories)
        .slice(12, Object.keys(categories).length)
        .map((categ, i) => (
          <Category
            key={i + 12}
            title={categ}
            genre={categories[categ].genre}
            changeCategory={changeCategory}
          ></Category>
        ))}
    </section>
  );
}

export default CategoriesBlock;
