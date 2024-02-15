import * as React from "react";
import Seo from "../components/seo";
import Home from "../components/home/home"; // 1. import the component

const IndexPage = () => {
  return <Home />;
};

export default IndexPage;

export const Head = () => <Seo />;
