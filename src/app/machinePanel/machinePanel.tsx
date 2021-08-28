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

  let numberRegEx = /^[0-9]*$/;
  let coinType = ["Penny", "Nickel", "Dime", "Quarter"];

  function handleInputOnBlur(event: any, type: string) {
    let value = event.target.value;
    let validationMsg = "";
    if (!value || !numberRegEx.test(value) || value == "0") {
      //Test whether the type given is a coin value
      if (coinType.find((e) => e === type)) {
        //for Coins: if no value or bad value, give 0
        let validationMsg = `Please enter a number greater than 0 for ${type}`;
        setValidations(0, type, true, validationMsg);
        calculateCoinTotal();
      } else {
        //For Soda: 0 is acceptable
        setValidations(0, type, false, validationMsg);
      }
    } else {
      //For a good input, set values
      setValidations(value, type, false, validationMsg);
      //if Coin -> Calulate total coin inventory
      calculateCoinTotal();
      //If Soda -> Calculate total cost
    }
  }

  function setValidations(
    value: string | number,
    type: string,
    isInvalid: boolean,
    msg: string
  ) {
    //Update field values with what was passed to the function
    switch (type) {
      case "Penny":
        updateVendingMachineState({
          pennyCount: value,
          pennyCountIsInvalid: isInvalid,
          pennyValidationMessage: msg,
        });
        break;
      case "Nickel":
        updateVendingMachineState({
          nickelCount: value,
          nickelCountIsInvalid: isInvalid,
          nickelValidationMessage: msg,
        });
        break;
      case "Dime":
        updateVendingMachineState({
          dimeCount: value,
          dimeCountIsInvalid: isInvalid,
          dimeValidationMessage: msg,
        });
        break;
      case "Quarter":
        updateVendingMachineState({
          quarterCount: value,
          quarterCountIsInvalid: isInvalid,
          quarterValidationMessage: msg,
        });
        break;
      case "Coke":
        updateVendingMachineState({
          cokeCount: value,
          cokeIsInvalid: isInvalid,
          cokeValidationMessage: msg,
        });
        break;
      case "Pepsi":
        updateVendingMachineState({
          pepsiCount: value,
          pepsiIsInvalid: isInvalid,
          pepsiValidationMessage: msg,
        });
        break;
      case "Soda":
        updateVendingMachineState({
          sodaCount: value,
          sodaIsInvalid: isInvalid,
          sodaValidationMessage: msg,
        });
        break;
    }
  }

  function calculateCoinTotal() {
    //Calculate total cent inventory based on amount of coins
    let pennyValue = +vendingMachineState.pennyCount;
    let nickelValue = +vendingMachineState.nickelCount * 5;
    let dimeValue = +vendingMachineState.dimeCount * 10;
    let quarterValue = +vendingMachineState.quarterCount * 25;
    let totalValue = pennyValue + nickelValue + dimeValue + quarterValue;
    updateVendingMachineState({
      totalCents: totalValue,
    });
  }

  function handleButtonPress(event: any) {
    //Buy soda
  }

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
              onChange={(event: any) => {
                //Only allow digits
                if (numberRegEx.test(event.target.value)) {
                  //trim leading zero's
                  let value = event.target.value.replace(/^0+/, "");
                  //Update value with what they enter
                  updateVendingMachineState({
                    pennyCount: value,
                  });
                }
              }}
              onBlur={(event: any) => handleInputOnBlur(event, "Penny")}
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
              onChange={(event: any) => {
                if (numberRegEx.test(event.target.value)) {
                  let value = event.target.value.replace(/^0+/, "");
                  updateVendingMachineState({
                    nickelCount: value,
                  });
                }
              }}
              onBlur={(event: any) => handleInputOnBlur(event, "Nickel")}
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
              onChange={(event: any) => {
                if (numberRegEx.test(event.target.value)) {
                  let value = event.target.value.replace(/^0+/, "");
                  updateVendingMachineState({
                    dimeCount: value,
                  });
                }
              }}
              onBlur={(event: any) => handleInputOnBlur(event, "Dime")}
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
              onChange={(event: any) => {
                if (numberRegEx.test(event.target.value)) {
                  let value = event.target.value.replace(/^0+/, "");
                  updateVendingMachineState({
                    quarterCount: value,
                  });
                }
              }}
              onBlur={(event: any) => handleInputOnBlur(event, "Quarter")}
              isInvalid={vendingMachineState.quarterCountIsInvalid}
              value={vendingMachineState.quarterCount}
              validationMessage={vendingMachineState.quarterValidationMessage}
            />
          </div>
        </div>
        <div className={"flex-row"}>
          <div className={"col"}>
            <GSOrderTotal
              name={"amount-deposited"}
              id={"amount-deposited"}
              amount={vendingMachineState.totalCents}
              label={"AMOUNT DEPOSITED:"}
            />
          </div>
        </div>
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
              onChange={(event: any) => {
                if (numberRegEx.test(event.target.value)) {
                  let value = event.target.value.replace(/^0+/, "");
                  updateVendingMachineState({
                    cokeCount: value,
                  });
                }
              }}
              onBlur={(event: any) => handleInputOnBlur(event, "Coke")}
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
              onChange={(event: any) => {
                if (numberRegEx.test(event.target.value)) {
                  let value = event.target.value.replace(/^0+/, "");
                  updateVendingMachineState({
                    pepsiCount: value,
                  });
                }
              }}
              onBlur={(event: any) => handleInputOnBlur(event, "Pepsi")}
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
              amount={vendingMachineState.orderTotal}
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
              onChange={(event: any) => {
                if (numberRegEx.test(event.target.value)) {
                  let value = event.target.value.replace(/^0+/, "");
                  updateVendingMachineState({
                    sodaCount: value,
                  });
                }
              }}
              onBlur={(event: any) => handleInputOnBlur(event, "Soda")}
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
