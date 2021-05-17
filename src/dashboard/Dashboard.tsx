import { Grid } from "@material-ui/core";
import React, { FunctionComponent, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import authenticatedFetch from "../account/fetch/authenticatedfetch";
import userIdState from "../recoil/UserId";
import userRecipesState from "../recoil/UserRecipes";
import RecipePopup from "./components/add-recipe/RecipePopup";
import RecipeHeader from "./components/header/RecipeHeader";
import RecipeCard from "./components/recipe-card/RecipeCard";
import IRecipeData from "./types/RecipeData";

const Dashboard: FunctionComponent = () => {
   const [recipeData, setRecipeData] = useRecoilState(userRecipesState);
   const userId = useRecoilValue(userIdState);

   useEffect(() => {
      authenticatedFetch(
         `/content/recipes?uid=${userId}`,
         undefined,
         "GET"
      ).then((value: IRecipeData[] | number) => {
         if (value && !(typeof value === "number")) setRecipeData(value);
      });
   }, [userId]);

   // if (process.env.NODE_ENV === "development") {
   //    recipe_data = require("./dev-data/data").default;
   // }
   return (
      <>
         <RecipeHeader />
         <Grid container spacing={0}>
            <RecipePopup />
            {recipeData &&
               recipeData.map((data: IRecipeData, index: number) => (
                  <Grid item key={data._id}>
                     <RecipeCard metadata={data} index={index} />
                  </Grid>
               ))}
         </Grid>
      </>
   );
};

export default Dashboard;
