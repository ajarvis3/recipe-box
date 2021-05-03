import { FunctionComponent } from "react";
import IRecipeCardDescriptionProps from "./types/recipecarddescription";

const RecipeCardDescription: FunctionComponent<IRecipeCardDescriptionProps> = (
   props: IRecipeCardDescriptionProps
) => {
   const { description } = props;
   return <p>{description}</p>;
};

export default RecipeCardDescription;
