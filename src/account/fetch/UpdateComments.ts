import IRecipeData from "../../dashboard/types/RecipeData";
import authenticatedFetch from "./AuthenticatedFetch";

const updateComments = (
  recipes: IRecipeData[],
  recipeIndex: number,
  update: (comments: string[]) => string[],
  onComplete: (value: IRecipeData) => void
) => {
  const recipe = recipes[recipeIndex];
  console.log(recipe, recipes);
  const newComments = update(recipe.comments.slice());
  const newRecipe = { ...recipe, comments: newComments };
  console.log(recipes, recipeIndex, update, onComplete);
  console.log(newComments);
  console.log(newRecipe);
  authenticatedFetch(
    `content/recipes?id=${recipe._id}`,
    JSON.stringify({ recipe: newRecipe }),
    "PATCH"
  ).then(onComplete);
};

export default updateComments;
