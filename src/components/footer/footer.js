import * as React from "react";
import "./footer.less";
import { Row, Flex } from "antd";
import { StaticImage } from "gatsby-plugin-image";

const MyFooter = () => {
  return (
    <div className="footer-text">
      <Flex justify="center" className="follow-text" wrap="wrap">
        <div className="footer-col">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/jiaying-ni-b5161815a/"
            rel="noopener noreferrer"
          >
            <Flex justify="center" align="center">
              <StaticImage
                alt="linkedin"
                className="footer-img"
                src="../../images/linkedin-w.png"
              />
              <span className="footer-row-text">LINKDIN</span>
            </Flex>
          </a>
        </div>

        <div className="footer-col">
          <a
            target="_blank"
            href="https://github.com/nijiaying-kate"
            rel="noopener noreferrer"
          >
            <Flex justify="center" align="center">
              <StaticImage
                alt="github"
                className="footer-img"
                src="../../images/github-w.png"
              />
              <span className="footer-row-text">GITHUB</span>
            </Flex>
          </a>
        </div>

        <div className="footer-col">
          <a
            target="_blank"
            href="https://leetcode.com/nijiayingkate/"
            rel="noopener noreferrer"
          >
            <Flex justify="center" align="center">
              <StaticImage
                alt="leetcode"
                className="footer-img"
                src="../../images/leetcode-w.png"
              />
              <span className="footer-row-text">LEETCODE</span>
            </Flex>
          </a>
        </div>
      </Flex>
      <Row justify="center">
        <div className="copyright">
          <p>©{new Date().getFullYear()} Created by Ni Jiaying</p>
        </div>
      </Row>
    </div>
  );
};
export default MyFooter;
