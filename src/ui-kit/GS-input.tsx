import React from "react";

export interface GSInputNewProps {
  onChange?: any;
  onBlur?: any;
  isInvalid?: boolean;
  name?: string;
  id?: string;
  label?: string;
  value?: string | number;
  validationMessage?: string;
}
export interface GSInputNewState {}

export class GSInput extends React.Component<GSInputNewProps, GSInputNewState> {
  constructor(props: GSInputNewProps | Readonly<GSInputNewProps>) {
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
        <label id={this.props.id} className={"GS-Label"}>
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
        />
        {this.props.isInvalid && (
          <span className={"GS-Error-Message"} id={this.props.id}>
            {this.props.validationMessage}
          </span>
        )}
      </>
    );
  }
}
