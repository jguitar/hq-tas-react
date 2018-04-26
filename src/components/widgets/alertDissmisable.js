import React from "react";
import { Alert } from "react-bootstrap";
import { Translate } from "react-redux-i18n";

class AlertDissmisable extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleDismiss = this.handleDismiss.bind(this);
    this.state = {
      show: true,
    };
  }

  handleDismiss() {
    this.setState({ show: false });
  }

  render() {
    if (!this.state.show) {
      return null;
    }
    return (
      <Alert className="col-md-6 col-md-offset-3" bsStyle="danger" onDismiss={this.handleDismiss}>
        <p>
          <Translate value="error" />
        </p>
      </Alert>
    );
  }
}

export default AlertDissmisable;
