import { FunctionComponent } from "react";
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
      <div className="enterText">
         <div>{fieldName}:</div>
         <input
            type={type}
            placeholder={fieldName}
            value={text}
            className="enterTextInput"
            name={fieldName}
            onChange={onChange}
         />
      </div>
   );
};

export default EnterText;
