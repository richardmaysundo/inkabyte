import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import CourseItem from "components/CourseItem";
import PageSection from "components/PageSection";
import "./Course.scss";

const Course = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, courses } = frontmatter;

  return (
    <PageSection className={clsx("course-section", className)} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row>
        {courses.map(
          ({ content, extraInfo, header, imageFileName, imageFileNameDetail, subheader }) => (
            <CourseItem
              key={header}
              imageFileName={imageFileName}
              header={header}
              subheader={subheader}
              content={content}
              imageFileNameDetail={imageFileNameDetail}
              extraInfo={
                <ul>
                  {extraInfo.map((ei) => (
                    <li key={ei}>{ei}</li>
                  ))}
                </ul>
              }
            />
          ),
        )}
      </Row>
    </PageSection>
  );
};

Course.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Course.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Course;
