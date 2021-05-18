import { makeStyles } from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import { FunctionComponent, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import authenticatedFetch from "../../../account/fetch/authenticatedfetch";
import userRecipesState from "../../../recoil/UserRecipes";
import currentRecipeIndexState from "../../recoil/CurrentRecipeIndex";
import IRecipeData from "../../types/RecipeData";
import IDeleteComment from "./types/DeleteComment";

const useStyles = makeStyles({
   delete: {
      "&:hover": {
         cursor: "pointer",
      },
   },
   active: {
      color: "red",
   },
});

const DeleteComment: FunctionComponent<IDeleteComment> = (
   props: IDeleteComment
) => {
   const { index } = props;

   const [recipes, setRecipes] = useRecoilState(userRecipesState);
   const currentRecipe = useRecoilValue(currentRecipeIndexState);

   const [deleteCount, setDeleteCount] = useState(0);

   const recipe = recipes[currentRecipe];

   const classes = useStyles();

   const handleDelete = () => {
      const newRecipes = recipes.slice();
      const newComments = recipe.comments.slice();
      newComments.splice(index, 1);
      const newRecipe = { ...recipe, comments: newComments };
      authenticatedFetch(
         `content/recipes?id=${recipe._id}`,
         JSON.stringify({ recipe: newRecipe }),
         "PATCH"
      ).then((value: IRecipeData) => {
         console.log(value);
         newRecipes[currentRecipe] = value;
         setRecipes(newRecipes);
         setDeleteCount(0);
      });
   };

   const handleClick = () => {
      if (deleteCount === 1) {
         handleDelete();
      } else {
         setDeleteCount(deleteCount + 1);
         setTimeout(() => setDeleteCount(0), 1000);
      }
   };

   return (
      <DeleteOutlined
         className={`${classes.delete} ${deleteCount === 1 && classes.active}`}
         onClick={handleClick}
      />
   );
};

export default DeleteComment;
