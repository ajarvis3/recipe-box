import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import AddRecipe from "./AddRecipe";
import MyRecipes from "./MyRecipes";

const useStyles = makeStyles({
   recipeHeader: {
      display: "flex",
      flexDirection: "row",
      borderBottom: "1px solid #707070",
   },
   recipeHeaderItemWrapper: {
      width: "50%",
      padding: 0,
      margin: 0,
   },
});

const RecipeHeader = () => {
   const classes = useStyles();
   return (
      <Box component="div" className={classes.recipeHeader}>
         <Box component="span" className={classes.recipeHeaderItemWrapper}>
            <MyRecipes />
         </Box>
         <Box component="span" className={classes.recipeHeaderItemWrapper}>
            <AddRecipe />
         </Box>
      </Box>
   );
};

export default RecipeHeader;
