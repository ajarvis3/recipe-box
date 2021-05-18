import React, { FunctionComponent } from "react";
import Popup from "reactjs-popup";
import { useRecoilState, useRecoilValue } from "recoil";
import popupState from "../../recoil/Popup";
import "reactjs-popup/dist/index.css";
import UrlInput from "./UrlInput";
import isAddState from "../../recoil/IsAddState";
import RecipeFields from "./RecipeFields";

const RecipePopup: FunctionComponent = () => {
   // make state for url input in recoil
   // make recoil state for open
   const [open, setOpen] = useRecoilState(popupState);
   const isAdd = useRecoilValue(isAddState);

   const closeModal = () => setOpen(false);

   return (
      <Popup
         open={open}
         closeOnDocumentClick
         onClose={closeModal}
         position="center center"
      >
         <UrlInput />
         {!isAdd && <RecipeFields />}
      </Popup>
   );
};

export default RecipePopup;
