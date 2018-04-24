import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { getSiteFullInfo } from "../../actions";

class SiteData extends Component {
  componentWillMount() {
    this.props.getFullSite();
  }

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
      <div key={item.id}>
        <Row>
          <Col xs={12} md={2} mdOffset={1}>
            <div>{item.name}</div>
          </Col>
          <Col xs={12} md={6}>
            {this.checkSobreoccupation(item)}
          </Col>
        </Row>
      </div>
    ));
    return (
      <Row>
        <Col xs={12} md={12}>
          <h3>Ocupacion por planta</h3>
          {floors}
          {this.overpopulated ? (
            <div>
              <span className="danger">*</span>Planta sobreocupada
            </div>
          ) : null}
        </Col>
        <Col xs={12} md={12}>
          <h3>Situación de los colaboradores</h3>
          <p>
            Colaboradores sin sala:<span className="danger">
              {" "}
              {` ${site.contributors_without_workroom}`}
            </span>
          </p>
          <p>Colaboradores sobreocupacion: {site.contributors_over_occupation}</p>
          <p>Colaboradores asignados: {site.contributors_assigned}</p>
          <p>
            <strong>Total colaboradores: {site.contributors_size}</strong>
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
