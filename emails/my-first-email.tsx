import * as React from "react";
import { Button } from "@react-email/button";
import { Container } from "@react-email/container";
import { Head } from "@react-email/head";
import { Hr } from '@react-email/hr';
import { Html } from "@react-email/html";
import { Img } from "@react-email/img";
import { Link } from "@react-email/link";
import { Preview } from "@react-email/preview";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";

export default function Email() {
  return (
    <Html>
      <Head />
      <Preview>My first email</Preview>
      <Section style={section}>
        <Container style={container}>
          <Img
            src="https://picsum.photos/id/0/300/200"
            alt=""
            width="300"
            height="200"
            style={image}
          />
          <Text style={heading}>This is my first email</Text>
          <Text style={paragraph}>
            <Link href="https://example.com">Lorem ipsum</Link> dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </Text>
          <Hr />
          <Text>
            Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Text>
          <Section style={buttonWrapper}>
            <Button style={button}>Check it out!</Button>
          </Section>
        </Container>
      </Section>
    </Html>
  );
}

const section = {
  backgroundColor: "#f0f0f0",
  padding: "24px",
};

const container = {
  backgroundColor: "#fff",
  borderRadius: 12,
  fontFamily: "system-ui",
  margin: "auto",
  maxWidth: 400,
  padding: "24px 32px",
};

const image = {
  borderRadius: 8,
  margin: "auto",
};

const heading = {
  fontSize: 40,
  fontWeight: "bold",
  lineHeight: 1.2,
  textAlign: "center",
};

const paragraph = {
  fontSize: 16,
};

const buttonWrapper = {
  textAlign: "center",
};

const button = {
  backgroundColor: "#55c500",
  borderRadius: 8,
  fontSize: 20,
  fontWeight: "bold",
  padding: 16,
};
