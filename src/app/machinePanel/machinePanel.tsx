import React, { useContext } from "react";
import { GSButton } from "../../ui-kit/GS-button";
import { GSCoinsInput } from "../../ui-kit/GS-coins-input";
import { GSSodaInput } from "../../ui-kit/GS-soda-input";
import { GSOrderTotal } from "../../ui-kit/GSOrderTotal";
import { vendingContext } from "../vending-context";

interface machinePanelProps {}

export function MachinePanel(props: machinePanelProps) {
  const { vendingMachineState, updateVendingMachineState } =
    useContext(vendingContext);

  function handleOnChangeTest(event: any) {}

  function handleOnBlurTest(event: any) {}

  function handleButtonPress(event: any) {}

  return (
    <>
      <div className={"container"}>
        <div className={"flex-row"}>
          <h1>Coins Information</h1>
        </div>
        <div className={"flex-row"}>
          <div className={"col"}>
            <GSCoinsInput
              id={"penny-input"}
              name={"penny-input"}
              label={"Penny"}
              onChange={handleOnChangeTest}
              onBlur={handleOnBlurTest}
              isInvalid={vendingMachineState.pennyCountIsInvalid}
              value={vendingMachineState.pennyCount}
              validationMessage={vendingMachineState.pennyValidationMessage}
            />
          </div>
          <div className={"col"}>
            <GSCoinsInput
              id={"nickel-input"}
              name={"nickel-input"}
              label={"Nickel"}
              onChange={handleOnChangeTest}
              onBlur={handleOnBlurTest}
              isInvalid={vendingMachineState.nickelCountIsInvalid}
              value={vendingMachineState.nickelCount}
              validationMessage={vendingMachineState.nickelValidationMessage}
            />
          </div>
          <div className={"col"}>
            <GSCoinsInput
              id={"dime-input"}
              name={"dine-input"}
              label={"Dime"}
              onChange={handleOnChangeTest}
              onBlur={handleOnBlurTest}
              isInvalid={vendingMachineState.dimeCountIsInvalid}
              value={vendingMachineState.dimeCount}
              validationMessage={vendingMachineState.dimeValidationMessage}
            />
          </div>
          <div className={"col"}>
            <GSCoinsInput
              id={"quarter-input"}
              name={"quarter-input"}
              label={"Quarter"}
              onChange={handleOnChangeTest}
              onBlur={handleOnBlurTest}
              isInvalid={vendingMachineState.quarterCountIsInvalid}
              value={vendingMachineState.quarterCount}
              validationMessage={vendingMachineState.quarterValidationMessage}
            />
          </div>
        </div>
        <br />
        <br />
        <div className={"flex-row"}>
          <h1>Products Information</h1>
        </div>
        <div className={"flex-row"}>
          <div className={"col"}>
            <GSSodaInput
              id={"coke-input"}
              name={"coke-input"}
              label={"Coke"}
              onChange={handleOnChangeTest}
              onBlur={handleOnBlurTest}
              isInvalid={vendingMachineState.cokeIsInvalid}
              value={vendingMachineState.cokeCount}
              validationMessage={vendingMachineState.cokeValidationMessage}
              availableDrinks={vendingMachineState.cokeAvailable}
              cost={vendingMachineState.cokeCost}
            />
          </div>
        </div>
        <div className={"flex-row"}>
          <div className={"col"}>
            <GSSodaInput
              id={"pepsi-input"}
              name={"pepsi-input"}
              label={"Pepsi"}
              onChange={handleOnChangeTest}
              onBlur={handleOnBlurTest}
              isInvalid={vendingMachineState.pepsiIsInvalid}
              value={vendingMachineState.pepsiCount}
              validationMessage={vendingMachineState.pepsiValidationMessage}
              availableDrinks={vendingMachineState.pepsiAvailable}
              cost={vendingMachineState.pepsiCost}
            />
          </div>
          <div className={"col"}>
            <GSOrderTotal
              name={"order-total"}
              id={"order-total"}
              cost={vendingMachineState.orderTotal}
              label={"ORDER TOTAL:"}
            />
          </div>
        </div>
        <div className={"flex-row"}>
          <div className={"col"}>
            <GSSodaInput
              id={"soda-input"}
              name={"soda-input"}
              label={"Soda"}
              onChange={handleOnChangeTest}
              onBlur={handleOnBlurTest}
              isInvalid={vendingMachineState.sodaIsInvalid}
              value={vendingMachineState.sodaCount}
              validationMessage={vendingMachineState.sodaValidationMessage}
              availableDrinks={vendingMachineState.sodaAvailable}
              cost={vendingMachineState.sodaCost}
            />
          </div>
          <div className={"col"}>
            <GSButton
              id={"drinks-button"}
              name={"drinks-button"}
              label={"Get Drinks"}
              onPress={handleButtonPress}
            />
          </div>
        </div>
      </div>
    </>
  );
}
