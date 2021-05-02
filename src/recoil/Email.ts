import { atom } from "recoil";

const emailState = atom({
   key: "emailState", // unique ID (with respect to other atoms/selectors)
   default: "", // default value (aka initial value)
});

export default emailState;
