import Head from "next/head";

import { Flex, Heading, Button } from "@chakra-ui/react";

import IntroView from "../components/IntroView";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="Pitt CSC Branches website"></meta>
        <title>Pitt CSC Branches</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex justifyContent="space-between" className="nav-bar">
        <Heading>CSC Branches</Heading>
        <p className="nav-bar-text">Learn everything about CSC Branches!</p>
      </Flex>
      <IntroView />
      <Footer />
    </>
  );
}
