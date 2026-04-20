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
  authenticatedFetch<IRecipeData>(
    `content/recipes?id=${recipe._id}`,
    JSON.stringify({ recipe: newRecipe }),
    "PATCH"
  ).then((value) => {
    if (!value.ok) {
      console.error(value.error);
      return;
    }

    if (value.data) {
      onComplete(value.data);
    }
  });
};

export default updateComments;
