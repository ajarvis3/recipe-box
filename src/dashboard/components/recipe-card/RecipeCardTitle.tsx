import React, { FunctionComponent } from "react";
import IRecipeCardTitleProps from "./types/recipecardtitle";
import "./RecipeCardInfo.css";

const RecipeCardTitle: FunctionComponent<IRecipeCardTitleProps> = (
   props: IRecipeCardTitleProps
) => {
   const { title } = props;
   return <h3 className="recipeCardTitle">{title}</h3>;
};

export default RecipeCardTitle;
