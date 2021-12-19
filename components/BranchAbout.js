import React from "react";

import { Container, Flex, VStack } from "@chakra-ui/react";

const BranchAbout = ({ branch, about }) => {
  return (
    <>
      <div className="about-text">
        <h2>Welcome!</h2>
        <p>
          Welcome to the {branch} about page! We are very excited you chose to
          discover more about {branch} and hope we can be as helpful as
          possible!
        </p>
      </div>
      <Container maxW="100%" width="80%" className="about-questions-container">
        <Flex>
          <VStack
            alignItems="flex-start"
            spacing={10}
            className="vertical-questions-stack left-stack"
          >
            <div className="about-text">
              <h2>What is {branch}?</h2>
              <p>{about["what"]}</p>
            </div>
          </VStack>
          <VStack
            alignItems="flex-start"
            spacing={10}
            className="vertical-questions-stack"
          >
            <div className="about-text">
              <h2>Why do {branch}?</h2>
              <p>{about["why"]}</p>
            </div>
          </VStack>
        </Flex>
      </Container>
      <div className="about-text">
        <h2>Our branch leads:</h2>
        <Flex>
          <VStack
            alignItems="flex-start"
            spacing={10}
            className="vertical-questions-stack  left-stack"
          >
            <div className="about-text">
              <h2>Alex G</h2>
              <p>Alex is our frontend and CSS wizard</p>
            </div>
          </VStack>
          <VStack
            alignItems="flex-start"
            spacing={10}
            className="vertical-questions-stack"
          >
            <div className="about-text">
              <h2>Niccolo</h2>
              <p>Niccolo is...Niccolo</p>
            </div>
          </VStack>
        </Flex>
      </div>
    </>
  );
};

export default BranchAbout;
