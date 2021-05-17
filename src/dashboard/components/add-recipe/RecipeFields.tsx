import React, { FunctionComponent, useState } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { Dispatch } from "react";
import { SetStateAction } from "react";
import currentRecipeIndexState from "../../recoil/CurrentRecipeIndex";
import { useRecoilValue } from "recoil";
import userRecipesState from "../../../recoil/UserRecipes";
import RecipeFieldInput from "./RecipeFieldInput";
import { Button, makeStyles } from "@material-ui/core";

const RecipeFields: FunctionComponent = () => {
   const recipeIndex = useRecoilValue(currentRecipeIndexState);
   const recipes = useRecoilValue(userRecipesState);
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

   return (
      <Box component="form">
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
