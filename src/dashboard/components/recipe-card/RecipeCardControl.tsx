import React, { FunctionComponent } from "react";
import RecipeCardOpenUrl from "./RecipeCardOpenUrl";
import IRecipeCardControlProps from "./types/RecipeCardControlProps";
import RecipeCardEdit from "./RecipeCardEdit";
import TrashIcon from "../TrashIcon";

const RecipeCardControl: FunctionComponent<IRecipeCardControlProps> = (
   props: IRecipeCardControlProps
) => {
   const { url, index, id } = props;

   return (
      <>
         <RecipeCardOpenUrl url={url} />
         <RecipeCardEdit index={index} />
         <TrashIcon url={url} index={index} id={id} />
      </>
   );
};

export default RecipeCardControl;
