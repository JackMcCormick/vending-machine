import React from "react";

export interface GSOrderTotalProps {
  name?: string;
  id?: string;
  amount: number;
  label?: string;
  isInvalid?: boolean;
  validationMessage?: string;
}
export interface GSOrderTotalState {}

export class GSOrderTotal extends React.Component<
  GSOrderTotalProps,
  GSOrderTotalState
> {
  constructor(props: GSOrderTotalProps | Readonly<GSOrderTotalProps>) {
    super(props);
  }

  render() {
    return (
      <>
        <div className={"soda-container"}>
          <div className={"order-col"}>
            <label id={this.props.id} className={"GS-soda-label"}>
              {this.props.label}
            </label>
          </div>
          <span className={"adjust-text-height"}>$</span>
          {this.props.amount > 0 ? (
            <div className={"order-col adjust-text-height"}>
              <p>{(this.props.amount / 100).toFixed(2)}</p>
            </div>
          ) : (
            <div className={"order-col adjust-text-height"}>
              <p>0</p>
            </div>
          )}
        </div>
        {this.props.isInvalid && (
          <span
            className={"GS-Error-Message adjust-error-height"}
            id={this.props.id}
          >
            {this.props.validationMessage}
          </span>
        )}
      </>
    );
  }
}
