import { atom } from "recoil";

const confirmationRequestState = atom({
   key: "confirmationRequestState",
   default: () => {},
});

export default confirmationRequestState;
