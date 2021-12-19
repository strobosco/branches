import React, { useEffect, useState } from "react";

import { Container, Flex, VStack } from "@chakra-ui/react";

import descriptions from "../utils/descriptions.json";

const IntroView = () => {
  const [webDevDescription, setWebDevDescription] = useState("");
  const [rustDevDescription, setRustDevDescription] = useState("");
  const [swiftDevDescription, setSwiftDevDescription] = useState("");
  const [algoDescription, setAlgoDevDescription] = useState("");

  useEffect(async () => {
    setWebDevDescription(descriptions["descriptions"]["web-dev"]);
    setRustDevDescription(descriptions["descriptions"]["rust-dev"]);
    setSwiftDevDescription(descriptions["descriptions"]["swift-dev"]);
    setAlgoDevDescription(descriptions["descriptions"]["algo-trading"]);
  }, []);

  return (
    <Container maxW="100%" width="80%" className="intro-container">
      <Flex>
        <VStack
          alignItems="flex-start"
          spacing={10}
          className="vertical-stack left-stack"
        >
          <div className="intro-text">
            <h2>
              <a href="/web-dev">Web Dev</a>
            </h2>
            <p>{webDevDescription}</p>
          </div>
        </VStack>
        <VStack alignItems="flex-start" spacing={10} className="vertical-stack">
          <div className="intro-text">
            <h2>
              <a href="/algo-trading">Algo Trading</a>
            </h2>
            <p>{algoDescription}</p>
          </div>
        </VStack>
      </Flex>
      <br />
      <Flex>
        <VStack
          alignItems="flex-start"
          spacing={10}
          className="vertical-stack left-stack"
        >
          <div className="intro-text">
            <h2>
              <a href="/rust-dev">Rust Dev</a>
            </h2>
            <p>{rustDevDescription}</p>
          </div>
        </VStack>
        <VStack alignItems="flex-start" spacing={10} className="vertical-stack">
          <div className="intro-text">
            <h2>
              <a href="/swift-dev">Swift Dev</a>
            </h2>
            <p>{swiftDevDescription}</p>
          </div>
        </VStack>
      </Flex>
    </Container>
  );
};

export default IntroView;
