import { Box, makeStyles, TextField } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import useChangeState from "../hooks/UseChangeState";
import useStateValue from "../hooks/UseStateValue";
import ITextProps from "./types/TextProps";

const useStyles = makeStyles({
   enterText: {
      margin: "5px auto",
      textAlign: "center",
      fontSize: "20px",
   },
   enterTextInput: {
      borderRadius: "5px",
      color: "black",
      fontSize: "20px",
      width: "90%",
   },
});

/**
 * General Text Input
 */
const EnterText: FunctionComponent<ITextProps> = (props: ITextProps) => {
   const { fieldName, type } = props;
   const classes = useStyles();

   const onChange = useChangeState(fieldName);
   const text = useStateValue(fieldName);

   return (
      <Box component='div' className={classes.enterText}>
         <Box component='div'>{fieldName}:</Box>
         <TextField
            type={type}
            placeholder={fieldName}
            value={text}
            className={classes.enterTextInput}
            name={fieldName}
            onChange={onChange}
         />
      </Box>
   );
};

export default EnterText;
