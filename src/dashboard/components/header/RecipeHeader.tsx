import React from "react";
import AddRecipe from "./AddRecipe";
import MyRecipes from "./MyRecipes";
import "./RecipeHeader.css";

const RecipeHeader = () => {
   return (
      <div className="recipeHeader">
         <span className="recipeHeaderItemWrapper">
            <MyRecipes />
         </span>
         <span className="recipeHeaderItemWrapper">
            <AddRecipe />
         </span>
      </div>
   );
};

export default RecipeHeader;
