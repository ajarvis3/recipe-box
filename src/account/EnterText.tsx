import { Box, TextField } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import useChangeState from "../hooks/UseChangeState";
import useStateValue from "../hooks/UseStateValue";
import ITextProps from "./types/TextProps";

/**
 * General Text Input
 */
const EnterText: FunctionComponent<ITextProps> = (props: ITextProps) => {
   const { fieldName, type } = props;

   const onChange = useChangeState(fieldName);
   const text = useStateValue(fieldName);

   return (
      <Box component='div' className="enterText">
         <Box component='div'>{fieldName}:</Box>
         <TextField
            type={type}
            placeholder={fieldName}
            value={text}
            className="enterTextInput"
            name={fieldName}
            onChange={onChange}
         />
      </Box>
   );
};

export default EnterText;
