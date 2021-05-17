import { Box, Button, makeStyles } from "@material-ui/core";
import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import currentRecipeIndexState from "../../recoil/CurrentRecipeIndex";
import currentRecipeUrl from "../../recoil/CurrentRecipeUrl";
import isAddState from "../../recoil/IsAddState";
import popupState from "../../recoil/Popup";

const useStyles = makeStyles({
   recipeHeaderRight: {
      float: "right",
      marginRight: "8px",
      marginBlockStart: "0.83em",
      marginBlockEnd: "0.3em",
      marginInlineStart: "0",
   },
});

const AddRecipe = () => {
   const setOpen = useSetRecoilState(popupState);
   const setAddState = useSetRecoilState(isAddState);
   const setCurrentRecipe = useSetRecoilState(currentRecipeIndexState);
   const setUrl = useSetRecoilState(currentRecipeUrl);

   const classes = useStyles();

   const onClick = () => {
      setAddState(true);
      setCurrentRecipe(-1);
      setOpen(true);
      setUrl("");
   }

   return (
      <Box component='span' className={classes.recipeHeaderRight}>
         <Button variant="contained" color="primary" onClick={onClick}>
            Add Recipe
         </Button>
      </Box>
   );
};

export default AddRecipe;
