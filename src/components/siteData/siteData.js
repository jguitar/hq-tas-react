import React, { Component } from "react";
import { Translate } from "react-redux-i18n";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { getSiteFullInfo } from "../../actions";

class SiteData extends Component {
  componentWillMount() {
    this.props.getFullSite();
  }

  overpopulated = false;

  checkSobreoccupation(floor) {
    if (floor.occupation > floor.capacity) {
      this.overpopulated = true;
      return <div className="danger">{`${floor.occupation} / ${floor.capacity}*`}</div>;
    }

    return (
      <div>
        {floor.occupation} / {floor.capacity}
      </div>
    );
  }

  renderSiteInfo = (site) => {
    if (!site) {
      return null;
    }

    const floors = site.buildings[0].floors.map(item => (
      <Row key={item.id}>
        <Col xs={12} md={2} mdOffset={1}>
          <div>{item.name}</div>
        </Col>
        <Col xs={12} md={6}>
          {this.checkSobreoccupation(item)}
        </Col>
      </Row>
    ));
    return (
      <Row>
        <Col xs={12} md={12}>
          <h3>
            <Translate value="site_data.ocupation_title" />
          </h3>
          {floors}
          {this.overpopulated ? (
            <div>
              <Translate value="site_data.overocupation_legend" dangerousHTML />
            </div>
          ) : null}
        </Col>
        <Col xs={12} md={12}>
          <h3>
            <Translate value="site_data.situation_title" />
          </h3>
          <p>
            <Translate
              value="site_data.contributors_without_workroom"
              number={site.contributors_without_workroom}
              className="danger-bold"
              dangerousHTML
            />
          </p>
          <p>
            <Translate
              value="site_data.contributors_over_occupation"
              number={site.contributors_over_occupation}
            />
          </p>
          <p>
            <Translate
              value="site_data.contributors_assigned"
              number={site.contributors_assigned}
            />
          </p>
          <p>
            <Translate
              value="site_data.contributors_size"
              number={site.contributors_size}
              dangerousHTML
            />
          </p>
        </Col>
      </Row>
    );
  };

  render() {
    return <div> {this.renderSiteInfo(this.props.contributors.site)}</div>;
  }
}

function mapStateToProps(state) {
  return {
    contributors: state.contributors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getFullSite: () => {
      dispatch(getSiteFullInfo());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SiteData);
