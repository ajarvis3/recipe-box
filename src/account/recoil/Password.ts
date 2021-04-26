import { atom } from "recoil";

const passwordState = atom({
   key: "passwordState",
   default: "",
});

export default passwordState;
