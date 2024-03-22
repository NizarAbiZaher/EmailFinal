import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  
  export const NizzyEmail = () => (
    <Html>
      <Head />
      <Preview>Developer Roadmap</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>🚀 Your Developer Roadmap 🚀</Heading>
          <Section style={body}>
            <Text style={paragraph}>
              <Link style={link} href='https://nizzyabi-roadmap.com'>
                👉 Click here to go to the roadmap 👈
              </Link>
            </Text>
            
          </Section>
          <Text style={paragraph}>
            Best,
            <br />- Nizar
          </Text>
          <Hr style={hr} />
          
          <Text style={footer}>NizzyABI Inc.</Text>
          
        </Container>
      </Body>
    </Html>
  );
  
  
  export default NizzyEmail;
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 25px 48px",
    backgroundImage: 'url("/assets/raycast-bg.png")',
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat, no-repeat",
  };
  
  const heading = {
    fontSize: "28px",
    fontWeight: "bold",
    marginTop: "48px",
  };
  
  const body = {
    margin: "24px 0",
  };
  
  const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
  };
  
  const link = {
    color: "#FF6363",
  };
  
  const hr = {
    borderColor: "#dddddd",
    marginTop: "48px",
  };
  
  const footer = {
    color: "#8898aa",
    fontSize: "12px",
    marginLeft: "4px",
  };
  
