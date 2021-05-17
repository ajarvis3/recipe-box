import React, { FunctionComponent } from "react";
import RecipeCardOpenUrl from "./RecipeCardOpenUrl";
import IRecipeCardControlProps from "./types/RecipeCardControlProps";
import RecipeCardEdit from "./RecipeCardEdit";

const RecipeCardControl: FunctionComponent<IRecipeCardControlProps> = (
   props: IRecipeCardControlProps
) => {
   const { url, index } = props;

   return (
      <>
         <RecipeCardOpenUrl url={url} />
         <RecipeCardEdit index={index} />
      </>
   );
};

export default RecipeCardControl;
