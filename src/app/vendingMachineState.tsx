export interface VendingMachineState {
  isButtonDisabled: boolean;

  pennyCount: number;
  pennyCountIsInvalid: boolean;
  pennyValidationMessage: string;
  nickelCount: number;
  nickelCountIsInvalid: boolean;
  nickelValidationMessage: string;
  dimeCount: number;
  dimeCountIsInvalid: boolean;
  dimeValidationMessage: string;
  quarterCount: number;
  quarterCountIsInvalid: boolean;
  quarterValidationMessage: string;
  totalCents: number;

  cokeAvailable: number;
  cokeCost: number;
  cokeCount: number;
  cokeIsInvalid: boolean;
  cokeValidationMessage: string;
  pepsiAvailable: number;
  pepsiCost: number;
  pepsiCount: number;
  pepsiIsInvalid: boolean;
  pepsiValidationMessage: string;
  sodaAvailable: number;
  sodaCost: number;
  sodaCount: number;
  sodaIsInvalid: boolean;
  sodaValidationMessage: string;

  orderTotal: number;
}

export const vendingMachineStateDefault: VendingMachineState = {
  isButtonDisabled: false,

  pennyCount: 100,
  pennyCountIsInvalid: false,
  pennyValidationMessage: "",
  nickelCount: 10,
  nickelCountIsInvalid: false,
  nickelValidationMessage: "",
  dimeCount: 5,
  dimeCountIsInvalid: false,
  dimeValidationMessage: "",
  quarterCount: 25,
  quarterCountIsInvalid: false,
  quarterValidationMessage: "",
  totalCents: 825,

  cokeAvailable: 5,
  cokeCost: 25,
  cokeCount: 0,
  cokeIsInvalid: false,
  cokeValidationMessage: "",
  pepsiAvailable: 15,
  pepsiCost: 36,
  pepsiCount: 0,
  pepsiIsInvalid: false,
  pepsiValidationMessage: "",
  sodaAvailable: 3,
  sodaCost: 45,
  sodaCount: 0,
  sodaIsInvalid: false,
  sodaValidationMessage: "",

  orderTotal: 0,
};
