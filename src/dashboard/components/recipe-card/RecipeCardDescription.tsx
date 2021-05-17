import { Typography } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import IRecipeCardDescriptionProps from "./types/RecipeCardDescription";

const RecipeCardDescription: FunctionComponent<IRecipeCardDescriptionProps> = (
   props: IRecipeCardDescriptionProps
) => {
   const { description } = props;
   return <Typography>{description}</Typography>;
};

export default RecipeCardDescription;
