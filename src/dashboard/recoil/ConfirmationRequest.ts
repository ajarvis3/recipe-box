import { atom } from "recoil";

// used by comments and edit popups
const confirmationRequestState = atom({
   key: "confirmationRequestState",
   default: () => {},
});

export default confirmationRequestState;
