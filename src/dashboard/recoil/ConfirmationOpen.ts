import { atom } from "recoil";

const confirmationOpenState = atom({
   key: "confirmationOpenState",
   default: false,
});

export default confirmationOpenState;
