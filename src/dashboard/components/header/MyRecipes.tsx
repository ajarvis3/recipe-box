import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
   myRecipes: {
      marginBlockEnd: "0.3em",
      display: "inline-block",
      fontSize: "3rem",
   },
});

const MyRecipes = () => {
   const classes = useStyles();
   return (
      <Typography variant="h2" className={classes.myRecipes}>
         My Recipes
      </Typography>
   );
};

export default MyRecipes;
