import React, { useState } from "react";
import Category from "./Category";
import { useNavigate } from "react-router-dom";

function CategoriesBlock(): JSX.Element {
  const header: string = "Find Your Next Book";
  const [status, setStatus] = useState<string>("📚✏️☕");
  const imageBasePath =
    window.location.protocol + "//" + window.location.host + "/elements/";

  const categories: Record<string, { status: string; genre: string }> = {
    "Action and Adventure": { status: "🧭⚔️🐉", genre: "Action" },
    Anthology: { status: "📚💬☕", genre: "Anthology" },
    Classic: { status: "🕯️🖤🎻", genre: "Classic" },
    "Comic and Graphic Novel": { status: "💥🦸🏼‍♂️💫", genre: "Comic" },
    "Crime and Detective": { status: "💀🕵🏻‍♂️📰", genre: "Crime" },
    Drama: { status: "💔🗡️💖", genre: "Drama" },
    Fable: { status: "📜🧀🎩", genre: "Fable" },
    "Fairy Tale": { status: "🔮🧚‍♀️🏰", genre: "FairyTale" },
    "Historical Fiction": { status: "⏳⚔️🦕", genre: "HistoricalFiction" },
    Fantasy: { status: "🧙‍♂️⚔️🐉", genre: "Fantasy" },
    Horror: { status: "🔪😨🎃", genre: "Horror" },
    Humor: { status: "😄💬🎉", genre: "Humor" },
    Mystery: { status: "🗝️🕵🏻‍♂️👽", genre: "Mystery" },
    Mythology: { status: "🔱📜🐉", genre: "Mythology" },
    Romance: { status: "📚🏹💌", genre: "Romance" },
    "Science Fiction (Sci-Fi)": { status: "🪐🦠🌌", genre: "ScienceFiction" },
    "Short Story": { status: "📚⏰☕", genre: "ShortStory" },
    "Suspense/Thriller": { status: "🔪😨🕵🏻‍♂️", genre: "Thriller" },
  };

  function changeCategory(title: string): void {
  
    
    setStatus(categories[title].status);
  }

  return (
    <div className="categoriesBlock">
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

      <div className="promo">
        <Category
          key={10}
          title={"Fantasy"}
          genre={categories["Fantasy"].genre}
          changeCategory={changeCategory}
        />
        <div className="promo_title">{header} </div>
        <Category
          key={11}
          title={"Horror"}
          genre={categories["Horror"].genre}
          changeCategory={changeCategory}
        />
      </div>

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
    </div>
  );
}

export default CategoriesBlock;
