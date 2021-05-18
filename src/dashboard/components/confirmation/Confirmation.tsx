import { Button, makeStyles } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import Popup from "reactjs-popup";
import { useRecoilState } from "recoil";
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
         <Button variant="contained" onClick={handleConfirm} color="secondary">
            Confirm
         </Button>
         <Button
           
            variant="contained"
          
             onClick={closeModal}
          
             className={classes.cancel}
         
         >
            Cancel
         </Button>
      </Popup>
   );
};

export default Confirmation;
