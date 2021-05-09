import { atom } from "recoil";

const currentRecipeUrl = atom({
   key: "currentRecipeUrl",
   default: "",
});

export default currentRecipeUrl;
