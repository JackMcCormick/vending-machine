import React from "react";

export interface GSChangeDisplayProps {
  name?: string;
  id?: string;
  pennyCount: number;
  nickelCount: number;
  dimeCount: number;
  quarterCount: number;
  label?: string;
}
export interface GSChangeDisplayState {}

export class GSChangeDisplay extends React.Component<
  GSChangeDisplayProps,
  GSChangeDisplayState
> {
  constructor(props: GSChangeDisplayProps | Readonly<GSChangeDisplayProps>) {
    super(props);
  }

  render() {
    return (
      <>
        <div className={"soda-container"}>
          <div className={"order-col"}>
            <label id={this.props.id} className={"GS-soda-label"}>
              <h1>{this.props.label}</h1>
            </label>
            <div className={"order-col adjust-text-height"}>
              <p>
                <b>Quarters: </b>
                {this.props.quarterCount}
              </p>
            </div>
            <div className={"order-col adjust-text-height"}>
              <p>
                <b>Dimes: </b>
                {this.props.dimeCount}
              </p>
            </div>
            <div className={"order-col adjust-text-height"}>
              <p>
                <b>Nickels: </b>
                {this.props.nickelCount}
              </p>
            </div>
            <div className={"order-col adjust-text-height"}>
              <p>
                <b>Pennies: </b>
                {this.props.pennyCount}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
