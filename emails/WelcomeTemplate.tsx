import { Body, Container, Html, Preview, Text } from "@react-email/components";
import Link from "next/link";
import React from "react";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome Abroad!</Preview>
      <Body>
        <Container>
          <Text>Hello {name}</Text>
          <Link href="https://piyushpanchal.com">www.piyushpanchal.com</Link>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeTemplate;
