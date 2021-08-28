import React, { useContext } from "react";
import { vendingContext } from "../vending-context";

interface machinePanelProps {}

export function MachinePanel(props: machinePanelProps) {
  const { vendingMachineState, updateVendingMachineState } =
    useContext(vendingContext);

  return (
    <>
      <div>Home Page Test</div>
    </>
  );
}
