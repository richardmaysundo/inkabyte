import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";

import TecnologyItem from "components/TecnologyItem";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";

const Tecnologies = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, tecnologies } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row className="text-center">
        {tecnologies.map((tecnology) => (
          <Col md={6} key={tecnology.header}>
            <TecnologyItem {...tecnology} />
          </Col>
        ))}
      </Row>
    </PageSection>
  );
};

Tecnologies.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Tecnologies.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Tecnologies;
