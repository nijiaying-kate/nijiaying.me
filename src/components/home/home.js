import * as React from "react";
import { Avatar, Badge, Flex, Row, Col, Carousel } from "antd";
import { Link } from "gatsby";

import "./home.less";

const Home = () => {
  return (
    <Flex wrap="wrap">
      <div className="home-left">
        <div className="home-xiang-avatar">
          <Link to="/">
            <Badge>
              <Avatar src={`headphoto11.jpg`} className="xiang-avatar" />
            </Badge>
          </Link>
        </div>
        <div className="home-left-name">
          <Link to="/">
            <p>Ni Jiaying (Kate)</p>
          </Link>
        </div>
        <div className="home-left-links display-none">
          <div className="home-left-text">
            <p>
              With Experience and Education in the areas of Knowledge Science.
            </p>
            <p>
              My interest is to continuously improve application of Data Science
              in the fields of Finance and Economics.
            </p>
          </div>
          <a
            target="_blank"
            href="mailto:nijiayingkate@gmail.com"
            rel="noopener noreferrer"
          >
            <Row className="home-row">
              <Col>
                <img alt="email" className="home-img" src={`email_pink.png`} />
              </Col>
              <Col>
                <span className="text-link"> Email </span>
              </Col>
            </Row>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/jiaying-ni-b5161815a/"
            rel="noopener noreferrer"
          >
            <Row className="home-row">
              <Col>
                <img
                  alt="linkedin"
                  className="home-img"
                  src={`linkedIn_pink.png`}
                />
              </Col>
              <Col>
                <span className="text-link"> Linkedin </span>
              </Col>
            </Row>
          </a>
          <a
            target="_blank"
            href="https://github.com/nijiaying-kate"
            rel="noopener noreferrer"
          >
            <Row className="home-row">
              <Col>
                <img
                  alt="github"
                  className="home-img"
                  src={`github_pink.png`}
                />
              </Col>
              <Col>
                <span className="text-link"> Github</span>
              </Col>
            </Row>
          </a>
          <a
            target="_blank"
            href="https://leetcode.com/nijiayingkate/"
            rel="noopener noreferrer"
          >
            <Row className="home-row">
              <Col>
                <img
                  alt="leetcode"
                  className="home-img"
                  src={`leetcode_pink.png`}
                />
              </Col>
              <Col>
                <span className="text-link"> Leetcode </span>
              </Col>
            </Row>
          </a>
        </div>
      </div>

      <div className="home-right">
        <h1>About Me</h1>
        <div className="text-size">
          <p>
            Hi! I'm Ni Jiaying. You can call me Kate as well. Now I am a
            doctoral candidate focusing on the fields of Data Science in Finance
            and Economics. My research aims to utilise data science and machine
            learning techniques to help businesses accurately predict financial
            distress and enhance the efficiency of financial decision-making. I
            believe that research in this area is crucial for addressing
            practical business issues and enhancing corporate competitiveness.
            In the future, I hope to apply my research findings to sectors such
            as finance, investment, and corporate management, contributing to
            practical applications and industry development.
          </p>
        </div>
        <div className="text-size">
          <p>
            Prior to pursuing my doctoral degree, I have held various positions
            in the financial industry. During my tenure as an Institutional Fund
            Operations Manager at XXXXX. My responsibilities included business
            support, fund operations, and post-loan management, and I achieved a
            series of significant accomplishments.
          </p>
        </div>
        <div className="text-size">
          <p>
            As a doctoral candidate, I am eagerly anticipating my future career
            development. I aspire to apply my expertise in fields such as
            finance, technology, and consultancy, engaging in roles related to
            data science, financial analysis, and risk management. I am
            committed to becoming a technically proficient and business-savvy
            professional, providing robust support for corporate development and
            innovation. I am looking forward to integrating my work experience
            with academic research to lay a solid foundation for my future
            career development.
          </p>
        </div>
        <div className="text-size">
          <p>This website offers a comprehensive resume with testimonials,</p>
        </div>
        <div className="home-right-divider-bgc" />
        <div className="home-left-carousel">
          <Carousel autoplay>
            <div className="text-size">
              <h4>2022 annual appraisal</h4>
              <p>Try to ask for comments from my TA work.</p>
            </div>
            <div className="text-size">
              <h4>2023 annual appraisal</h4>
              <p>Comments 2</p>
            </div>
          </Carousel>
        </div>
      </div>
    </Flex>
  );
};

export default Home;
