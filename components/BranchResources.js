import React from "react";

import { Flex } from "@chakra-ui/react";

const BranchResources = ({ branch }) => {
  return (
    <>
      <div className="about-text">
        <h2>Resources</h2>
        <p>
          Welcome to the {branch} resources! Here you'll be able to find plenty
          of useful resources to help you get started in {branch}
          and find useful tips & tricks.
        </p>
      </div>
    </>
  );
};

export default BranchResources;
