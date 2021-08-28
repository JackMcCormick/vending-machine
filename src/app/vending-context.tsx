import React, { useState, createContext, FC } from "react";
import {
  VendingMachineState,
  vendingMachineStateDefault,
} from "./vendingMachineState";

interface IVendingContext {
  vendingMachineState: VendingMachineState;
  updateVendingMachineState: React.Dispatch<React.SetStateAction<any>>;
}

interface Props {}

export const vendingContext = createContext({} as IVendingContext);

export const VendingContextProvider: FC<Props> = ({ children }) => {
  const [vendingMachineState, setVendingState] = useState<VendingMachineState>(
    vendingMachineStateDefault
  );

  const value = {
    vendingMachineState,
    updateVendingMachineState,
  };

  function updateVendingMachineState(newState: any) {
    setVendingState((prevState: any) => {
      return { ...prevState, ...newState };
    });
  }

  return (
    <vendingContext.Provider value={value}>{children}</vendingContext.Provider>
  );
};
