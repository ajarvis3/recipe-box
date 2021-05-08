import React, { FunctionComponent } from "react";
import IRecipeCardTitleProps from "./types/recipecardtitle";
import "./RecipeCardInfo.css";
import { Typography } from "@material-ui/core";

const RecipeCardTitle: FunctionComponent<IRecipeCardTitleProps> = (
   props: IRecipeCardTitleProps
) => {
   const { title } = props;
   return (
      <Typography variant="h3" className="recipeCardTitle">
         {title}
      </Typography>
   );
};

export default RecipeCardTitle;
