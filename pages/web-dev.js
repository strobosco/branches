import React, { useState, useEffect } from "react";
import Head from "next/head";

import { Container, Flex, Heading, Button } from "@chakra-ui/react";

import BranchAbout from "../components/BranchAbout";
import BranchResources from "../components/BranchResources";
import BranchBlog from "../components/BranchBlog";

import questions from "../utils/web-dev/about.json";

const WebDev = () => {
  const [tab, setTab] = useState(0);
  const [about, setAbout] = useState([]);

  useEffect(() => {
    setAbout(questions["questions"]);
  });

  switch (tab) {
    case 0:
      var viewing = (
        <div>
          <BranchAbout branch={"web dev"} about={about} />
        </div>
      );
      break;
    case 1:
      var viewing = (
        <div>
          <BranchResources branch={"web dev"} />
        </div>
      );
      break;
    case 2:
      var viewing = (
        <div>
          <BranchBlog branch={"web dev"} />
        </div>
      );
      break;
    default:
      break;
  }

  return (
    <>
      <Head>
        <title>Web Dev Branch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex justifyContent="space-between" className="nav-bar">
        <Heading>Web Dev</Heading>
        <Button onClick={() => setTab(0)}>About Web Dev</Button>
        <Button onClick={() => setTab(1)}>Resources</Button>
        <Button onClick={() => setTab(2)}>Blog</Button>
      </Flex>
      <Container width="80%" maxWidth="100%" className="branch-intro">
        {viewing}
      </Container>
    </>
  );
};

export default WebDev;
