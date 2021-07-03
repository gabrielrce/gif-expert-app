import React, { useState } from "react";
import AddCategory from "../AddCategory/AddCategory";
import GifGrid from "../GifGrid/GifGrid";

const GifExpertApp = () => {
  //   const categories = ["One Punch", "Sa", "DB"];
  const [categories, setCategories] = useState(["One Punch"]);
  //   const handleAdd = () => {
  //     setCategories([...categories, "Avatar"]);
  //   };
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {categories.map((category) => (
          <GifGrid category={category} key={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
