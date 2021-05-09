import { Input } from "@material-ui/core";
import React, { FunctionComponent, useState } from "react";
import Popup from "reactjs-popup";
import { useRecoilState } from "recoil";
import popupState from "../../recoil/Popup";
import "reactjs-popup/dist/index.css";
import UrlInput from "./UrlInput";

const RecipePopup: FunctionComponent = () => {
   // make state for url input in recoil
   // make recoil state for open
   const [url, setUrl] = useState("");
   const [open, setOpen] = useRecoilState(popupState);

   const closeModal = () => setOpen(false);

   const onChange = (
      e: React.ChangeEvent<HTMLInputElement>,
      setState: React.Dispatch<React.SetStateAction<string>>
   ) => {
      setState(e.target.value);
   };

   return (
      <Popup
         open={open}
         closeOnDocumentClick
         onClose={closeModal}
         position="center center"
      >
         <UrlInput />
      </Popup>
   );
};

export default RecipePopup;
