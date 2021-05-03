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
      <span>
         <RecipeCardTitle title={title} />
         <RecipeCardDescription description={description} />
      </span>
   );
};

export default RecipeCardInfo;
