import { atom } from "recoil";
import IRecipeData from "../dashboard/types/RecipeData";

const userRecipesState = atom({
   key: "userRecipesState",
   default: [] as IRecipeData[],
});

export default userRecipesState;
