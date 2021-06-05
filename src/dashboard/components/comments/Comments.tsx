import { Grid, makeStyles } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import Popup from "reactjs-popup";
import { useRecoilState, useRecoilValue } from "recoil";
import userRecipesState from "../../../recoil/UserRecipes";
import currentRecipeIndexState from "../../recoil/CurrentRecipeIndex";
import Comment from "./Comment";
import isCommentsOpenState from "../../recoil/IsCommentsOpen";
import AddComment from "./CommentButtons";

const useStyles = makeStyles({
   container: {
      paddingTop: 14,
   },
});

const Comments: FunctionComponent = () => {
  // index of comment to edit
  const [isCommentsOpen, setCommentsOpen] = useRecoilState(isCommentsOpenState);

  const [index, setIndex] = useRecoilState(currentRecipeIndexState);
  const recipes = useRecoilValue(userRecipesState);

  const classes = useStyles();

  const recipeElements = recipes[index].comments.map(
    (value: string, index: number) => {
      return <Comment text={value} index={index} key={index} />;
    }
  );

  const closeModal = () => {
    setCommentsOpen(false);
    setIndex(-1);
  };

  return (
    <Popup open={isCommentsOpen} onClose={closeModal} position="center center">
      <Grid
        container
        direction="column"
        spacing={1}
        className={classes.container}
      >
        {recipeElements}
      </Grid>
      <AddComment />
    </Popup>
  );
};

export default Comments;
