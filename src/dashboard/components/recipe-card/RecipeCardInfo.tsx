import { Box } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import IRecipeCardProps from "../../types/RecipeCardProps";
import RecipeCardDescription from "./RecipeCardDescription";
import RecipeCardTitle from "./RecipeCardTitle";

const RecipeCardInfo: FunctionComponent<IRecipeCardProps> = (
   props: IRecipeCardProps
) => {
   const { metadata } = props;
   const { title, description } = metadata;
   return (
      <Box component='span'>
         <RecipeCardTitle title={title} />
         <RecipeCardDescription description={description} />
      </Box>
   );
};

export default RecipeCardInfo;
