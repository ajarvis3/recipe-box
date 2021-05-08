import { Box } from "@material-ui/core";
import React from "react";
import AddRecipe from "./AddRecipe";
import MyRecipes from "./MyRecipes";
import "./RecipeHeader.css";

const RecipeHeader = () => {
   return (
      <Box component='div' className="recipeHeader">
         <Box component='span' className="recipeHeaderItemWrapper">
            <MyRecipes />
         </Box>
         <Box component='span' className="recipeHeaderItemWrapper">
            <AddRecipe />
         </Box>
      </Box>
   );
};

export default RecipeHeader;
