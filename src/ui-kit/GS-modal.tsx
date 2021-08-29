import React from "react";
import { Modal } from "react-bootstrap";
import { GSButton } from "./GS-button";

export interface GSModalProps {
  body?: {};
  id?: string;
  show: boolean;
  title?: string;
  handleClose: any;
  handleAccept: any;
  isInvalid?: boolean;
  validationMessage?: string;
}
export interface GSModalState {
  show: boolean;
}

export class GSModal extends React.Component<GSModalProps, GSModalState> {
  constructor(props: GSModalProps | Readonly<GSModalProps>) {
    super(props);
    this.state = {
      show: this.props.show,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleAccept = this.handleAccept.bind(this);
  }

  handleClose = (event: any) => {
    this.props.handleClose(event);
  };

  handleAccept = (event: any) => {
    this.props.handleAccept(event);
  };

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.handleClose}
        size={"sm"}
        centered={true}
        backdrop={"static"}
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>
            <h3>{this.props.title}</h3>
          </Modal.Title>
        </Modal.Header>
        {this.props.body && (
          <Modal.Body>
            {this.props.body}
            {this.props.isInvalid && (
              <span className={"GS-Error-Message"} id={this.props.id}>
                {this.props.validationMessage}
              </span>
            )}
          </Modal.Body>
        )}
        <Modal.Footer>
          <GSButton
            id={"modal-accept-button"}
            name={"modal-accept-button"}
            label={"Accept"}
            onPress={this.handleAccept}
            isDisabled={false}
          />
          <GSButton
            id={"modal-cancel-button"}
            name={"modal-cancel-button"}
            label={"Cancel"}
            onPress={this.handleClose}
            isDisabled={false}
          />
        </Modal.Footer>
      </Modal>
    );
  }
}
