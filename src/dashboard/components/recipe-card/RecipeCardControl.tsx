import React, { FunctionComponent } from "react";
import RecipeCardOpenUrl from "./RecipeCardOpenUrl";
import IRecipeCardControlProps from "./types/recipecardcontrolprops";
import IUrlProps from "./types/recipecardurlprops";

const RecipeCardControl: FunctionComponent<IRecipeCardControlProps> = (
   props: IRecipeCardControlProps
) => {
   const { url, id } = props;

   return (
      <>
         <RecipeCardOpenUrl url={url} />
      </>
   );
};

export default RecipeCardControl;
