import { Grid } from "@material-ui/core";
import React, { FunctionComponent, useCallback, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import authenticatedFetch from "../account/fetch/authenticatedfetch";
import searchState from "../recoil/Search";
import userIdState from "../recoil/UserId";
import userRecipesState from "../recoil/UserRecipes";
import RecipePopup from "./components/add-recipe/RecipePopup";
import Confirmation from "./components/confirmation/Confirmation";
import RecipeHeader from "./components/header/RecipeHeader";
import RecipeCard from "./components/recipe-card/RecipeCard";
import confirmationOpenState from "./recoil/ConfirmationOpen";
import popupState from "./recoil/Popup";
import IRecipeData from "./types/RecipeData";

const Dashboard: FunctionComponent = () => {
   const [recipeData, setRecipeData] = useRecoilState(userRecipesState);
   const userId = useRecoilValue(userIdState);
   const search = useRecoilValue(searchState);
   const popupOpen = useRecoilValue(popupState);
   const confirmationOpen = useRecoilValue(confirmationOpenState);

   const getSearchRecipes = useCallback(() => {
      console.log('callback')
      const searchLower = search.toLowerCase();
      const filterMethod = (str: string) => {
         return str.toLowerCase().includes(searchLower);
      };
      return recipeData.filter((recipe) => {
         return (
            filterMethod(recipe.title) ||
            filterMethod(recipe.author) ||
            filterMethod(recipe.description) ||
            filterMethod(recipe.source) ||
            filterMethod(recipe.url) ||
            recipe.comments.some((comment) => filterMethod(comment))
         );
      });
   }, [search, recipeData]);

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
            {popupOpen && <RecipePopup />}
            {confirmationOpen && <Confirmation />}
            {recipeData &&
               getSearchRecipes().map((data: IRecipeData, index: number) => (
                  <Grid item key={data._id}>
                     <RecipeCard metadata={data} index={index} />
                  </Grid>
               ))}
         </Grid>
      </>
   );
};

export default Dashboard;
