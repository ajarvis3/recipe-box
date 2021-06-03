import React, { FunctionComponent, useState } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { Dispatch } from "react";
import { SetStateAction } from "react";
import currentRecipeIndexState from "../../recoil/CurrentRecipeIndex";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import userRecipesState from "../../../recoil/UserRecipes";
import RecipeFieldInput from "./RecipeFieldInput";
import { Button } from "@material-ui/core";
import authenticatedFetch from "../../../account/fetch/AuthenticatedFetch";
import IRecipeData from "../../types/RecipeData";
import popupState from "../../recoil/Popup";

const RecipeFields: FunctionComponent = () => {
   const [recipes, setRecipes] = useRecoilState(userRecipesState);
   const recipeIndex = useRecoilValue(currentRecipeIndexState);
   const setOpen = useSetRecoilState(popupState);

   const currentRecipe = recipes[recipeIndex];


   const [title, setTitle] = useState(currentRecipe.title);
   const [author, setAuthor] = useState(currentRecipe.author);
   const [source, setSource] = useState(currentRecipe.source);
   const [description, setDescription] = useState(currentRecipe.description);
   const [imageUrl, setImageUrl] = useState(currentRecipe.imageUrl);

   const getOnChange = (setState: Dispatch<SetStateAction<string>>) => {
      return (event: React.ChangeEvent<HTMLInputElement>) => {
         setState(event.target.value);
      };
   };

   const getNewRecipe = () => {
      return {
         ...currentRecipe,
         title: title,
         author: author,
         source: source,
         description: description,
         imageUrl: imageUrl,
      };
   };

   const onSubmit = (event: React.SyntheticEvent) => {
      event.preventDefault();
      const newRecipe = getNewRecipe();
      const newRecipes = recipes.slice();
      // deal with backend things...
      authenticatedFetch(
         `/content/recipes?id=${newRecipe._id}`,
         JSON.stringify({ recipe: newRecipe }),
         "PATCH"
      ).then((value: IRecipeData) => {
         newRecipes[recipeIndex] = value;
         setRecipes(newRecipes);
         setOpen(false);
      });
   };

   return (
      <Box component="form" onSubmit={onSubmit}>
         <Grid container direction="column" spacing={0}>
            <RecipeFieldInput
               fieldName="Title"
               value={title}
               onChange={getOnChange(setTitle)}
            />
            <RecipeFieldInput
               fieldName="Author"
               value={author}
               onChange={getOnChange(setAuthor)}
            />
            <RecipeFieldInput
               fieldName="Source"
               value={source}
               onChange={getOnChange(setSource)}
            />
            <RecipeFieldInput
               fieldName="Image URL"
               value={imageUrl}
               onChange={getOnChange(setImageUrl)}
            />
            <RecipeFieldInput
               fieldName="Description"
               value={description}
               onChange={getOnChange(setDescription)}
            />
            <Button color="secondary" variant="contained" type="submit">
               Submit Changes
            </Button>
         </Grid>
      </Box>
   );
};

export default RecipeFields;
