import { RecoilState } from "recoil";
import * as state from "../index";

const getByName = (name: string): RecoilState<any> => {
   name = name.replace(" ", "");
   const nameState = name.charAt(0).toLowerCase() + name.slice(1) + "State";
   var result: RecoilState<any> | undefined = undefined;
   Object.values(state).some((val: RecoilState<any>) => {
      if (val.key === nameState) {
         result = val;
         return true;
      }
      return false;
   });
   const returnValue = (result as unknown) as RecoilState<any>;
   return returnValue;
};

export default getByName;
