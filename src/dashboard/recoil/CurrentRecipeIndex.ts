import { atom } from "recoil";

const currentRecipeIndexState = atom({
   key: "currentRecipeIndexState",
   default: -1,
});

export default currentRecipeIndexState;
