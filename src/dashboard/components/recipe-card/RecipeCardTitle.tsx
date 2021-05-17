import React, { FunctionComponent } from "react";
import IRecipeCardTitleProps from "./types/RecipeCardTitle";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
   title: {
      fontSize: "2rem",
      borderBottom: "1px solid #707070",
   },
});

const RecipeCardTitle: FunctionComponent<IRecipeCardTitleProps> = (
   props: IRecipeCardTitleProps
) => {
   const classes = useStyles();
   const { title } = props;
   return (
      <Typography variant="h3" className={classes.title}>
         {title}
      </Typography>
   );
};

export default RecipeCardTitle;
