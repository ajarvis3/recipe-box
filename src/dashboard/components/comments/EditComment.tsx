import { Grid, makeStyles, TextField } from "@material-ui/core";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import authenticatedFetch from "../../../account/fetch/authenticatedfetch";
import userRecipesState from "../../../recoil/UserRecipes";
import currentRecipeIndexState from "../../recoil/CurrentRecipeIndex";
import IRecipeData from "../../types/RecipeData";
import editCommentState from "./recoil/EditCommentState";
import IComment from "./types/Comment";

const useStyles = makeStyles({
   editComment: {
      margin: "0% 5%",
      width: "80%",
   },
});

const EditComment: FunctionComponent<IComment> = (props: IComment) => {
   const { text, index } = props;
   const [comment, setComment] = useState(text);
   const inputRef = useRef<HTMLInputElement>(null);

   const [recipes, setRecipes] = useRecoilState(userRecipesState);
   const currentRecipeIndex = useRecoilValue(currentRecipeIndexState);
   const setEditComment = useSetRecoilState(editCommentState);

   const classes = useStyles();

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setComment(event.target.value);
   };

   const handleBlur = () => {
      const newRecipes = recipes.slice();
      const recipe = newRecipes[currentRecipeIndex];
      const newComments = recipe.comments.slice();
      newComments[index] = comment;
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
         setEditComment(-1);
      });
   };

   useEffect(() => {
      inputRef.current?.focus();
   }, []);

   return (
      <Grid item>
         <TextField
            type="text"
            value={comment}
            onChange={handleChange}
            onBlur={handleBlur}
            className={classes.editComment}
            inputRef={inputRef}
         ></TextField>
      </Grid>
   );
};

export default EditComment;
