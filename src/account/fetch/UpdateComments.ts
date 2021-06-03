import IRecipeData from "../../dashboard/types/RecipeData";
import authenticatedFetch from "./AuthenticatedFetch";

const updateComments = (
  recipes: IRecipeData[],
  recipeIndex: number,
  update: (comments: string[]) => string[],
  onComplete: (value: IRecipeData) => void
) => {
  const recipe = recipes[recipeIndex];
  const newComments = update(recipe.comments.slice());
  const newRecipe = { ...recipe, comments: newComments };
  authenticatedFetch(
    `content/recipes?id=${recipe._id}`,
    JSON.stringify({ recipe: newRecipe }),
    "PATCH"
  ).then(onComplete);
};

export default updateComments;
