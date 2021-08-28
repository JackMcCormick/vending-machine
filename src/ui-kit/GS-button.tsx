import React from "react";

export interface GSButtonProps {
  onPress?: any;
  name?: string;
  id?: string;
  label?: string;
}
export interface GSButtonState {}

export class GSButton extends React.Component<GSButtonProps, GSButtonState> {
  constructor(props: GSButtonProps | Readonly<GSButtonProps>) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress = (event: any) => {
    if (this.props.onPress) {
      this.props.onPress(event);
    }
  };

  render() {
    const { onPress } = this.props;
    return (
      <>
        <button className={"GS-Button"} id={this.props.id} onClick={onPress}>
          {this.props.label}
        </button>
      </>
    );
  }
}
