import { RecoilState, useRecoilValue } from "recoil";
import getByName from "../recoil/utils/getByName";

function useStateValue(name: string) {
   const stateAtom: RecoilState<any> | undefined = getByName(name);
   const stateValue = useRecoilValue(stateAtom);
   return stateValue;
}

export default useStateValue;
