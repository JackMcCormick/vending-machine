import React from "react";

export interface GSOrderToalProps {
  name?: string;
  id?: string;
  cost?: number;
  label?: string;
}
export interface GSOrderTotalState {}

export class GSOrderTotal extends React.Component<
  GSOrderToalProps,
  GSOrderTotalState
> {
  constructor(props: GSOrderToalProps | Readonly<GSOrderToalProps>) {
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
          <div className={"order-col adjust-text-height"}>
            <p>${this.props.cost}</p>
          </div>
        </div>
      </>
    );
  }
}
