import { Box, Button, TextField } from "@material-ui/core";
import React from "react";
import { useRecoilState } from "recoil";
import authenticatedFetch from "../../../account/fetch/authenticatedfetch";
import userRecipesState from "../../../recoil/UserRecipes";
import currentRecipeUrl from "../../recoil/CurrentRecipeUrl";
import IRecipeData from "../../types/RecipeData";

const UrlInput = () => {
   const [url, setUrl] = useRecoilState(currentRecipeUrl);
   const [recipeData, setRecipeData] = useRecoilState(userRecipesState);

   const onClick = (e: React.SyntheticEvent) => {
      e.preventDefault();
      authenticatedFetch(
         "content/recipes",
         JSON.stringify({ url }),
         "POST"
      ).then((value: IRecipeData) => {
         const newRecipeData = recipeData.slice();
         newRecipeData.push(value);
         setRecipeData(newRecipeData);
      });
   };

   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUrl(e.target.value);
   };

   return (
      <Box component="form" onSubmit={onClick}>
         <TextField
            type="text"
            value={url}
            onChange={onChange}
            placeholder="Recipe Url"
         />
         <Button variant="contained" color="primary" type="submit">
            Submit URL
         </Button>
      </Box>
   );
};

export default UrlInput;
