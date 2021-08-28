import React from "react";

export interface GSSodaInputProps {
  onChange?: any;
  onBlur?: any;
  isInvalid?: boolean;
  name?: string;
  id?: string;
  label?: string;
  value?: string | number;
  validationMessage?: string;
  availableDrinks?: number;
  cost?: number;
}
export interface GSSodaInputState {}

export class GSSodaInput extends React.Component<
  GSSodaInputProps,
  GSSodaInputState
> {
  constructor(props: GSSodaInputProps | Readonly<GSSodaInputProps>) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onChange = (event: any) => {
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  onBlur = (event: any) => {
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  render() {
    return (
      <>
        <div className={"soda-container"}>
          <div className={"soda-col"}>
            <label id={this.props.id} className={"GS-soda-label"}>
              {this.props.label}
            </label>
            <p>
              {this.props.availableDrinks} drinks available, Cost ={" "}
              {this.props.cost}
            </p>
          </div>
          <div className={"soda-col"}>
            <input
              className={"GS-Input"}
              id={this.props.id}
              name={this.props.name}
              onChange={this.onChange}
              onBlur={this.onBlur}
              value={this.props.value}
            />
            {this.props.isInvalid && (
              <span className={"GS-Error-Message"} id={this.props.id}>
                {this.props.validationMessage}
              </span>
            )}
          </div>
        </div>
      </>
    );
  }
}
