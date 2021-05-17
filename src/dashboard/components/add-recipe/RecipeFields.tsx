import React, { FunctionComponent, useState } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { Dispatch } from "react";
import { SetStateAction } from "react";
import currentRecipeIndexState from "../../recoil/CurrentRecipeIndex";
import { useRecoilState, useRecoilValue } from "recoil";
import userRecipesState from "../../../recoil/UserRecipes";
import RecipeFieldInput from "./RecipeFieldInput";
import { Button, makeStyles } from "@material-ui/core";
import authenticatedFetch from "../../../account/fetch/authenticatedfetch";
import IRecipeData from "../../types/RecipeData";

const RecipeFields: FunctionComponent = () => {
   const recipeIndex = useRecoilValue(currentRecipeIndexState);
   const [recipes, setRecipes] = useRecoilState(userRecipesState);
   const currentRecipe = recipes[recipeIndex];
   const [title, setTitle] = useState(currentRecipe.title);
   const [author, setAuthor] = useState(currentRecipe.author);
   const [source, setSource] = useState(currentRecipe.source);
   const [description, setDescription] = useState(currentRecipe.description);
   const [imageUrl, setImageUrl] = useState(currentRecipe.imageUrl);
   const [comments, setComments] = useState(currentRecipe.comments);

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
         comments: comments,
      };
   };

   const onSubmit = (event: React.SyntheticEvent) => {
      event.preventDefault();
      const newRecipe = getNewRecipe();
      const newRecipes = recipes.slice();
      console.log(newRecipe);
      // deal with backend things...
      authenticatedFetch(
         `/content/recipes?id=${newRecipe._id}`,
         JSON.stringify({ recipe: newRecipe }),
         "PATCH"
      ).then((value: IRecipeData) => {
         console.log(value);
         newRecipes[recipeIndex] = value;
         setRecipes(newRecipes);
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
