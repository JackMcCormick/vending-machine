import React from "react";

export interface GSCoinsInputProps {
  onChange?: any;
  onBlur?: any;
  isInvalid?: boolean;
  name?: string;
  id?: string;
  label?: string;
  value?: string | number;
  validationMessage?: string;
  className?: string;
  isDisabled?: boolean;
}
export interface GSCoinsInputState {}

export class GSCoinsInput extends React.Component<
  GSCoinsInputProps,
  GSCoinsInputState
> {
  constructor(props: GSCoinsInputProps | Readonly<GSCoinsInputProps>) {
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
        <div className={"coins-container"}>
          <div className={this.props.className}>
            <label id={this.props.id} className={"GS-coins-label"}>
              {this.props.label}
            </label>
            <br />
            <input
              className={"GS-Input"}
              id={this.props.id}
              name={this.props.name}
              onChange={this.onChange}
              onBlur={this.onBlur}
              value={this.props.value}
              disabled={this.props.isDisabled}
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
