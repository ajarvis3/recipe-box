import { atom } from "recoil";

const isCommentsOpenState = atom({
   key: "isCommentsOpenState",
   default: false,
});

export default isCommentsOpenState;
