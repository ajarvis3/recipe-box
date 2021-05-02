import { atom } from "recoil";

const lastNameState = atom({
   key: "lastNameState",
   default: "",
});

export default lastNameState;
