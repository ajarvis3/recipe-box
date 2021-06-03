import { Button, Container, makeStyles } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import authenticatedFetch from "../../../account/fetch/AuthenticatedFetch";
import userRecipesState from "../../../recoil/UserRecipes";
import currentRecipeIndexState from "../../recoil/CurrentRecipeIndex";
import isCommentsOpenState from "../../recoil/IsCommentsOpen";
import IRecipeData from "../../types/RecipeData";

const useStyles = makeStyles({
   container: {
      margin: "2% 0%",
      display: "flex",
      justifyContent: "center",
   },
});

const AddComment: FunctionComponent = () => {
   const [recipes, setRecipes] = useRecoilState(userRecipesState);
   const currentRecipeIndex = useRecoilValue(currentRecipeIndexState);
   const setCommentsOpen = useSetRecoilState(isCommentsOpenState);

   const classes = useStyles();

   const handleClick = () => {
      const newRecipes = recipes.slice();
      const recipe = newRecipes[currentRecipeIndex];
      const newComments = recipe.comments.slice();
      newComments.push("");
      const newRecipe = {
         ...recipe,
         comments: newComments,
      };
      authenticatedFetch(
         `content/recipes?id=${recipe._id}`,
         JSON.stringify({ recipe: newRecipe }),
         "PATCH"
      ).then((value: IRecipeData) => {
         console.log(value);
         newRecipes[currentRecipeIndex] = value;
         setRecipes(newRecipes);
      });
   };

   return (
      <Container className={classes.container}>
         <Button variant="contained" color="secondary" onClick={handleClick}>
            Add a Note
         </Button>
         <Button variant="contained" onClick={() => setCommentsOpen(false)}>
            Close
         </Button>
      </Container>
   );
};

export default AddComment;
