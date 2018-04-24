import React, { Component } from "react";
import { Table, Grid, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { getContributorsUnassigned } from "./actions";

class App extends Component {
  componentWillMount() {
    this.props.getContributors();
  }

  checkWorkroom = (contributor) => {
    if (!contributor.workroom) {
      return <span className="unassigned">Sin puesto asignado</span>;
    }
    return <span className="overocupation">Sobreocupacion</span>;
  };

  renderContributors = (contributors) => {
    if (!contributors) {
      return null;
    }
    return contributors.map(item => (
      <tr key={item.id}>
        <td>{`${item.first_name} ${item.last_name}`}</td>
        <td>{item.workroom}</td>
        <td>{item.floor}</td>
        <td>{item.code}</td>
        <td>{item.business_unit}</td>
        <td>{this.checkWorkroom(item)}</td>
      </tr>
    ));
  };

  render() {
    return (
      <div>
        <h2>WELCOME TO Take A Sit!</h2>

        <Grid fluid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <Table bsClass="customTable" responsive>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Sala</th>
                    <th>Planta</th>
                    <th>Nº Empleado</th>
                    <th>Agencia</th>
                    <th className="customHeadTable">Estado</th>
                    <th />
                  </tr>
                </thead>
                <tbody>{this.renderContributors(this.props.contributors.unassigned)}</tbody>
              </Table>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contributors: state.contributors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getContributors: () => {
      dispatch(getContributorsUnassigned());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
