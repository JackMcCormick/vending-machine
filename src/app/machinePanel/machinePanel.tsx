import React, { useContext } from "react";
import { vendingContext } from "../vending-context";

interface machinePanelProps {}

function coinSection(props: machinePanelProps) {
  const { vendingMachineState, updateVendingMachineState } =
    useContext(vendingContext);

  return <></>;
}
