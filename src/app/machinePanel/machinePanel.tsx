import React, { useContext } from "react";
import { GSInput } from "../../ui-kit/GS-input";
import { vendingContext } from "../vending-context";

interface machinePanelProps {}

export function MachinePanel(props: machinePanelProps) {
  const { vendingMachineState, updateVendingMachineState } =
    useContext(vendingContext);

  function handleOnChangeTest(event: any) {}

  function handleOnBlurTest(event: any) {}

  return (
    <>
      <div className={"container"}>
        <GSInput
          id={"idTest"}
          name={"nameTest"}
          label={"LabelTest"}
          onChange={handleOnChangeTest}
          onBlur={handleOnBlurTest}
          isInvalid={true}
          value={"Test"}
          validationMessage={"Test Validation Message"}
        />
      </div>
    </>
  );
}
