import { makeStyles } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import Tooltip from "@material-ui/core/Tooltip";
import React, { FunctionComponent } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userRecipesState from "../../../recoil/UserRecipes";
import currentRecipeIndexState from "../../recoil/CurrentRecipeIndex";
import currentRecipeUrl from "../../recoil/CurrentRecipeUrl";
import isAddState from "../../recoil/IsAddState";
import popupState from "../../recoil/Popup";
import IRecipeCardEditProps from "./types/RecipeCardEditProps";

const useStyles = makeStyles({
   edit: {
      "&:hover": {
         cursor: "pointer",
      },
   },
});

const RecipeCardEdit: FunctionComponent<IRecipeCardEditProps> = (
   props: IRecipeCardEditProps
) => {
   const classes = useStyles();
   const { index } = props;

   const setAddState = useSetRecoilState(isAddState);
   const setCurrentRecipe = useSetRecoilState(currentRecipeIndexState);
   const setOpen = useSetRecoilState(popupState);
   const setUrl = useSetRecoilState(currentRecipeUrl);
   const recipes = useRecoilValue(userRecipesState);

   const onClick = () => {
      setAddState(false);
      setCurrentRecipe(index);
      setOpen(true);
      setUrl(recipes[index].url);
   };

   return (
     <Tooltip title="Edit Recipe">
       <Edit onClick={onClick} className={classes.edit} />
     </Tooltip>
   );
};

export default RecipeCardEdit;
