import * as React from "react";
import "./resume.less";
import { Breadcrumb, Row, Col, Timeline } from "antd";
import { Link } from "gatsby";

const Index = () => {
  return (
    <div>
      <Breadcrumb
        className="resume-breads"
        items={[
          {
            title: (
              <Link to="/" className="decoration-none">
                Home
              </Link>
            ),
          },
          {
            title: "Resume",
          },
        ]}
      />
      <div>
        <Row className="resume-row">
          <Col className="resume-left display-none">
            <Timeline
              className="resume-timeline"
              items={[
                {
                  children: (
                    <Link to="#resume" className="decoration-none">
                      <span className="resume-line-text">INTRODUCTION</span>
                    </Link>
                  ),
                },
                {
                  children: (
                    <Link to="#skills" className="decoration-none">
                      <span className="resume-line-text">SKILLS</span>
                    </Link>
                  ),
                },
                {
                  children: (
                    <Link to="#experience" className="decoration-none">
                      <span className="resume-line-text">EXPERIENCE</span>
                    </Link>
                  ),
                },
                {
                  children: (
                    <Link to="#education" className="decoration-none">
                      <span className="resume-line-text">EDUCATION</span>
                    </Link>
                  ),
                },
              ]}
            />
          </Col>
          <Col className="resume-right">
            <div>
              <h1 id="resume">Resume</h1>
              <div className="text-size">
                <p>
                  I define myself as a passionate and organized person. I am
                  rigorous, efficient and I appreciate quality work.
                </p>
              </div>
              <div className="text-size">
                <p>
                  I am constantly learning about new technologies, and I
                  undertake new personal projects in order to deepen my
                  knowledge as well as to be able to propose solutions adapted
                  to the work.
                </p>
              </div>
              <div className="text-size">
                <p>
                  I particularly like working in a team but I also know how to
                  be independent when necessary.
                </p>
              </div>
              <div className="text-size">
                <p>
                  I thrive not only by working, but also by bringing value to
                  the company, in which the ability to face challenges,
                  recognize and rectify mistakes and be tenacious is essential.
                </p>
              </div>
            </div>
            <div>
              <h1 id="skills">SKILLS</h1>
              <div className="text-size">
                <p>
                  I define myself as a passionate and organized person. I am
                  rigorous, efficient and I appreciate quality work.
                </p>
              </div>
              <div className="text-size">
                <p>
                  I am constantly learning about new technologies, and I
                  undertake new personal projects in order to deepen my
                  knowledge as well as to be able to propose solutions adapted
                  to the work.
                </p>
              </div>
              <div className="text-size">
                <p>
                  I particularly like working in a team but I also know how to
                  be independent when necessary.
                </p>
              </div>
              <div className="text-size">
                <p>
                  I thrive not only by working, but also by bringing value to
                  the company, in which the ability to face challenges,
                  recognize and rectify mistakes and be tenacious is essential.
                </p>
              </div>
            </div>
            <div>
              <h1 id="experience">EXPERIENCE</h1>
              <div className="text-size">
                <p>
                  I define myself as a passionate and organized person. I am
                  rigorous, efficient and I appreciate quality work.
                </p>
              </div>
              <div className="text-size">
                <p>
                  I am constantly learning about new technologies, and I
                  undertake new personal projects in order to deepen my
                  knowledge as well as to be able to propose solutions adapted
                  to the work.
                </p>
              </div>
              <div className="text-size">
                <p>
                  I particularly like working in a team but I also know how to
                  be independent when necessary.
                </p>
              </div>
              <div className="text-size">
                <p>
                  I thrive not only by working, but also by bringing value to
                  the company, in which the ability to face challenges,
                  recognize and rectify mistakes and be tenacious is essential.
                </p>
              </div>
            </div>
            <div>
              <h1 id="education">EDUCATION</h1>
              <div className="text-size">
                <p>
                  I define myself as a passionate and organized person. I am
                  rigorous, efficient and I appreciate quality work.
                </p>
              </div>
              <div className="text-size">
                <p>
                  I am constantly learning about new technologies, and I
                  undertake new personal projects in order to deepen my
                  knowledge as well as to be able to propose solutions adapted
                  to the work.
                </p>
              </div>
              <div className="text-size">
                <p>
                  I particularly like working in a team but I also know how to
                  be independent when necessary.
                </p>
              </div>
              <div className="text-size">
                <p>
                  I thrive not only by working, but also by bringing value to
                  the company, in which the ability to face challenges,
                  recognize and rectify mistakes and be tenacious is essential.
                </p>
              </div>
            </div>
            <div>
              <h1>Resume</h1>
              <div className="text-size">
                <p>
                  I define myself as a passionate and organized person. I am
                  rigorous, efficient and I appreciate quality work.
                </p>
              </div>
              <div className="text-size">
                <p>
                  I am constantly learning about new technologies, and I
                  undertake new personal projects in order to deepen my
                  knowledge as well as to be able to propose solutions adapted
                  to the work.
                </p>
              </div>
              <div className="text-size">
                <p>
                  I particularly like working in a team but I also know how to
                  be independent when necessary.
                </p>
              </div>
              <div className="text-size">
                <p>
                  I thrive not only by working, but also by bringing value to
                  the company, in which the ability to face challenges,
                  recognize and rectify mistakes and be tenacious is essential.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Index;
