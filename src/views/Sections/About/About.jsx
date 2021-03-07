import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";

import "./About.scss";

const About = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, timeline } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row>
        <Col lg={12}>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <br />
              <p className="text-muted mb-5">
                Inkabyte nace de la necesidad existente en la realidad peruana; la educación
                tradicional se enfoca en el conocimiento, pero descuida las capacidades que desde
                pequeños adquirimos: el pensamiento lógico-matemático. En Inkabyte queremos
                complementar la educación de estudiantes desde los 7 a los 17 años de edad, potenciando su
                manera de pensar, para ello hacemos uso de la lógica computacional, empleando una de
                las herramientas más usada en estos días: la PC, para que los estudiantes sean
                capaces de crear proyectos diversos; como presentaciones animadas, historias
                animadas y videojuegos; divirtiéndose en el proceso y aprendiendo programación de
                manera entretenida.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </PageSection>
  );
};

About.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

About.defaultProps = {
  className: null,
  frontmatter: null,
};

export default About;
