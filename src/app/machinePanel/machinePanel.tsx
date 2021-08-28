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
              isInvalid={false}
              value={"Test"}
              validationMessage={"Test Validation Message"}
            />
          </div>
          <div className={"col"}>
            <GSCoinsInput
              id={"nickel-input"}
              name={"nickel-input"}
              label={"Nickel"}
              onChange={handleOnChangeTest}
              onBlur={handleOnBlurTest}
              isInvalid={false}
              value={"Test"}
              validationMessage={"Test Validation Message"}
            />
          </div>
          <div className={"col"}>
            <GSCoinsInput
              id={"dime-input"}
              name={"dine-input"}
              label={"Dime"}
              onChange={handleOnChangeTest}
              onBlur={handleOnBlurTest}
              isInvalid={false}
              value={"Test"}
              validationMessage={"Test Validation Message"}
            />
          </div>
          <div className={"col"}>
            <GSCoinsInput
              id={"quarter-input"}
              name={"quarter-input"}
              label={"Quarter"}
              onChange={handleOnChangeTest}
              onBlur={handleOnBlurTest}
              isInvalid={false}
              value={"Test"}
              validationMessage={"Test Validation Message"}
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
              isInvalid={true}
              value={"Test"}
              validationMessage={"Test Validation Message"}
              availableDrinks={5}
              cost={25}
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
              isInvalid={true}
              value={"Test"}
              validationMessage={"Test Validation Message"}
              availableDrinks={15}
              cost={36}
            />
          </div>
          <div className={"col"}>
            <GSOrderTotal
              name={"order-total"}
              id={"order-total"}
              cost={10.22}
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
              isInvalid={true}
              value={"Test"}
              validationMessage={"Test Validation Message"}
              availableDrinks={3}
              cost={45}
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
