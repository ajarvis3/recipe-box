import { Box, Grid, makeStyles, TextField, Typography } from "@material-ui/core";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import IComment from "./types/Comment";
import DeleteComment from "./DeleteComment";
import updateComments from "../../../account/fetch/UpdateComments";
import IRecipeData from "../../types/RecipeData";
import { useRecoilState, useRecoilValue } from "recoil";
import userRecipesState from "../../../recoil/UserRecipes";
import currentRecipeIndexState from "../../recoil/CurrentRecipeIndex";

const useStyles = makeStyles({
  comment: {
    width: "80%",
    margin: "0% 0% 0% 5%",
    borderBottom: "1px solid black",
    height: 24,
    display: "inline-block",
    "&:hover": {
      cursor: "text",
    },
  },
  box: {
    maxHeight: 25,
    padding: 0,
    margin: 0,
  },
  editComment: {
    margin: "0% 5%",
    width: "80%",
  },
});

const Comment: FunctionComponent<IComment> = (props: IComment) => {
  const { text, index } = props;
  const [comment, setComment] = useState(text);
  const inputRef = useRef<HTMLInputElement>(null);
  const [recipes, setRecipes] = useRecoilState(userRecipesState);
  const currentRecipeIndex = useRecoilValue(currentRecipeIndexState);

  // const setEditComment = useSetRecoilState(editCommentState);
  const [editComment, setEditComment] = useState(false);

  const classes = useStyles();

     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setComment(event.target.value);
   };

   const handleBlur = () => {
      const newRecipes = recipes.slice();
      updateComments(
        recipes,
        currentRecipeIndex,
        (comments: string[]) => {
          comments[index] = comment;
          return comments;
        },
        (value: IRecipeData) => {
          newRecipes[currentRecipeIndex] = value;
          setRecipes(newRecipes);
          setEditComment(false);
        }
      );
   };

   useEffect(() => {
      if (editComment)
         inputRef.current?.focus();
   }, [editComment]);

   useEffect(() => {
      setComment(text);
   }, [text])


  const handleClick = () => {
    setEditComment(true);
  };

  return (
    <Grid item>
      <Box className={classes.box} onBlur={handleBlur}>
        {editComment ? (
          <TextField
            type="text"
            value={comment}
            onChange={handleChange}
            className={classes.editComment}
            inputRef={inputRef}
          ></TextField>
        ) : (
          <Typography onClick={handleClick} className={classes.comment}>
            {comment}
          </Typography>
        )}
        <DeleteComment index={index} />
      </Box>
    </Grid>
  );
};

export default Comment;
