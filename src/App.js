import React, { Component } from "react";
import { Translate } from "react-redux-i18n";
import { Table, Grid, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";

import { getContributorsUnassigned, changeLanguage } from "./actions";
import SiteData from "./components/siteData/siteData";
import NavBar from "./components/NavBar/NavBar";
import AlertDissmisable from "./components/widgets/alertDissmisable";

class App extends Component {
  componentWillMount() {
    this.props.getContributors();
  }

  checkError() {
    if (this.props.contributors.error) {
      return <AlertDissmisable />;
    }
    return null;
  }

  checkWorkroom = (contributor) => {
    if (!contributor.workroom) {
      return (
        <span className="unassigned">
          <Translate value="contributors_list.unassigned" />
        </span>
      );
    }
    return (
      <span className="overocupation">
        <Translate value="contributors_list.overocupation" />
      </span>
    );
  };

  renderContributors = (contributors) => {
    if (!contributors) {
      return null;
    }

    if (contributors.length === 0) {
      return (
        <tr>
          <td colSpan="6">
            <Translate value="contributors_list.empty" />
          </td>
        </tr>
      );
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
        <NavBar {...this.props} />
        <Grid fluid>
          {this.checkError()}
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <h4>
                <Translate value="contributors_list.header" />
              </h4>
              <Table responsive>
                <thead>
                  <tr>
                    <th>
                      <Translate value="contributors_list.contributor" />
                    </th>
                    <th>
                      <Translate value="contributors_list.workroom" />
                    </th>
                    <th>
                      <Translate value="contributors_list.floor" />
                    </th>
                    <th>
                      <Translate value="contributors_list.employee_code" />
                    </th>
                    <th>
                      <Translate value="contributors_list.bussiness_unit" />
                    </th>
                    <th className="customHeadTable">
                      <Translate value="contributors_list.state" />
                    </th>
                    <th />
                  </tr>
                </thead>
                <tbody>{this.renderContributors(this.props.contributors.unassigned)}</tbody>
              </Table>
            </Col>
            <Col xs={12} md={4} className="position_data">
              <SiteData />
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
    setLanguage: (e) => {
      dispatch(changeLanguage(e.target.getAttribute("value")));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
