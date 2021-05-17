import { useEffect } from "react";
import { SetterOrUpdater } from "recoil";

/**
 * Currently sets all states to a given default value
 * Should probably be renamed to something more appropriate
 * @param setStates setters
 * @param defaultValue value to set state to
 */
function useCleanup<T>(setStates: SetterOrUpdater<T>[], defaultValue: T) {
   useEffect(() => 
      setStates.forEach((setState) => {
         setState(defaultValue);
      })
      // run once per component
      // eslint-disable-next-line
   , []);
}

export default useCleanup;
