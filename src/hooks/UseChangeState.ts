import { RecoilState, useSetRecoilState } from "recoil";
import getByName from "../recoil/utils/getByName";

function useChangeState(name: string) {
   const stateAtom: RecoilState<any> | undefined = getByName(name);
   const setState = useSetRecoilState(stateAtom);
   return (event: React.ChangeEvent<HTMLInputElement>) => {
      setState(event.target.value);
   };
}

export default useChangeState;
