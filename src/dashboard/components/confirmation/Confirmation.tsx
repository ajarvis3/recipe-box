import { Button, makeStyles } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import Popup from "reactjs-popup";
import { useRecoilState, useSetRecoilState } from "recoil";
import confirmationOpenState from "../../recoil/ConfirmationOpen";
import confirmationRequestState from "../../recoil/ConfirmationRequest";

const useStyles = makeStyles({
   cancel: {
      backgroundColor: "#B00020",
      color: "#FFFFFF",
   },
});

const Confirmation: FunctionComponent = () => {
   const [confirmationOpen, setConfirmationOpen] = useRecoilState(
      confirmationOpenState
   );
   const [confirmationRequest, setConfirmationRequest] = useRecoilState(
      confirmationRequestState
   );

   const classes = useStyles();

   const closeModal = () => {
      setConfirmationOpen(false);
      setConfirmationRequest(() => {});
   };

   const handleConfirm = () => {
      console.log(confirmationRequest);
      confirmationRequest();
      closeModal();
   };

   return (
      <Popup
         open={confirmationOpen}
         closeOnDocumentClick
         onClose={closeModal}
         position="center center"
      >
         Are you sure you want to send this request?
         <Button onClick={handleConfirm} color="secondary">
            Confirm
         </Button>
         <Button onClick={closeModal} className={classes.cancel}>
            Cancel
         </Button>
      </Popup>
   );
};

export default Confirmation;
