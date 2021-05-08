import { Box, Button, makeStyles } from "@material-ui/core";
import React from "react";
import { useRecoilState } from "recoil";
import popupState from "../../recoil/Popup";

const useStyles = makeStyles({
   recipeHeaderRight: {
      float: "right",
      marginRight: "8px",
      marginBlockStart: "0.83em",
      marginBlockEnd: "0.3em",
      marginInlineStart: "0",
   },
});

const AddRecipe = () => {
   const [open, setOpen] = useRecoilState(popupState);

   const classes = useStyles();

   const onClick = () => {
      setOpen(true);
   }

   return (
      <Box component='span' className={classes.recipeHeaderRight}>
         <Button variant="contained" color="primary" onClick={onClick}>
            Add Recipe
         </Button>
      </Box>
   );
};

export default AddRecipe;
