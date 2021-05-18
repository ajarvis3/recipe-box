import { atom } from "recoil";

const editCommentState = atom({
   key: "editCommentState",
   default: -1,
});

export default editCommentState;
