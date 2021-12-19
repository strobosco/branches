import React from "react";

import { Flex } from "@chakra-ui/react";

const BranchBlog = ({ branch }) => {
  return (
    <>
      <div className="about-text">
        <h2>Blog</h2>
        <p>
          Welcome to the {branch} blog! Here you'll find members of the
          community and be able to share and posts your thoughts, what you find
          interesting about web dev, and anything cool you might find online!
        </p>
      </div>
    </>
  );
};

export default BranchBlog;
