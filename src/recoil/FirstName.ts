import { atom } from "recoil";

const firstNameState = atom({
   key: "firstNameState",
   default: "",
});

export default firstNameState;
