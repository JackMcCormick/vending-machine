export interface VendingMachineState {
  isButtonDisabled: boolean;

  pennyCount: string;
  pennyCountIsInvalid: boolean;
  pennyValidationMessage: string;
  nickelCount: string;
  nickelCountIsInvalid: boolean;
  nickelValidationMessage: string;
  dimeCount: string;
  dimeCountIsInvalid: boolean;
  dimeValidationMessage: string;
  quarterCount: string;
  quarterCountIsInvalid: boolean;
  quarterValidationMessage: string;
  totalCents: number;
  totalDepositIsInvalid: boolean;
  totalDepositValidationMessage: string;

  cokeAvailable: number;
  cokeCost: number;
  cokeCount: string;
  cokeIsInvalid: boolean;
  cokeValidationMessage: string;
  pepsiAvailable: number;
  pepsiCost: number;
  pepsiCount: string;
  pepsiIsInvalid: boolean;
  pepsiValidationMessage: string;
  sodaAvailable: number;
  sodaCost: number;
  sodaCount: string;
  sodaIsInvalid: boolean;
  sodaValidationMessage: string;

  orderTotal: number;
}

export const vendingMachineStateDefault: VendingMachineState = {
  isButtonDisabled: false,

  pennyCount: "100",
  pennyCountIsInvalid: false,
  pennyValidationMessage: "",
  nickelCount: "10",
  nickelCountIsInvalid: false,
  nickelValidationMessage: "",
  dimeCount: "5",
  dimeCountIsInvalid: false,
  dimeValidationMessage: "",
  quarterCount: "25",
  quarterCountIsInvalid: false,
  quarterValidationMessage: "",
  totalCents: 825,
  totalDepositIsInvalid: false,
  totalDepositValidationMessage: "",

  cokeAvailable: 5,
  cokeCost: 25,
  cokeCount: "0",
  cokeIsInvalid: false,
  cokeValidationMessage: "",
  pepsiAvailable: 15,
  pepsiCost: 36,
  pepsiCount: "0",
  pepsiIsInvalid: false,
  pepsiValidationMessage: "",
  sodaAvailable: 3,
  sodaCost: 45,
  sodaCount: "0",
  sodaIsInvalid: false,
  sodaValidationMessage: "",

  orderTotal: 0,
};
