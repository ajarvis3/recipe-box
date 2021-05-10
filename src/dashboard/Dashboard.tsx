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
      ).then((value: IRecipeData[]) => {
         setRecipeData(value);
      });
   }, []);

   // if (process.env.NODE_ENV === "development") {
   //    recipe_data = require("./dev-data/data").default;
   // }
   return (
      <>
         <RecipeHeader />
         <Grid container spacing={0}>
            <RecipePopup />
            {recipeData.map((data: IRecipeData) => (
               <Grid item key={data._id}>
                  <RecipeCard metadata={data} />
               </Grid>
            ))}
         </Grid>
      </>
   );
};;;;;;;;;;;;;;;

export default Dashboard;
