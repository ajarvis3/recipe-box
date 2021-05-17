import { atom } from "recoil";

const isAddState = atom({
   key: "isAddState",
   default: false,
});

export default isAddState;
