import React from "react";
import {
  Container,
  Segment,
  Grid,
  List,
  Header,
  Divider,
  Image,
  Icon
} from "semantic-ui-react";
import SemanticLogo from "../../semantic-logo.jpg";
import googleLogo from "../../Google-Books-logo.jpg";
import reactLogo from "../../React-icon.jpg";

export default function FooterSection() {
  return (
    <Container>
      <Segment vertical style={{ margin: "5em 0em 0em", padding: "5em 0em" }}>
        <Container textAlign="center">
          <Grid divided stackable>
            <Grid.Column width={3}>
              <Header as="h4" content="Semantic-UI-React" />
              <Image
                style={{ marginTop: "15px" }}
                centered
                size="tiny"
                href="https://react.semantic-ui.com/"
                target="_"
                src={SemanticLogo}
                alt="semantic-ui-react logo"
              />
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as="h4" content="Google Books" />
              <Image
                style={{ marginTop: "30px" }}
                centered
                size="small"
                href="https://books.google.com/"
                target="_"
                src={googleLogo}
                alt="google books logo"
              />
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as="h4" content="React" />
              <Image
                centered
                size="small"
                href="https://reactjs.org/"
                target="_"
                src={reactLogo}
                alt="React logo"
              />
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" content="Reading List App" />
              <p>
                React-based Google Books Search app. This app demonstrates the
                use of React Components, and lifecycle methods to query and
                display books based on user searches. Built using Node, React, Express
                and MongoDB. Deployed via Heroku.
              </p>
            </Grid.Column>
          </Grid>

          <Divider section />
          <Image centered size="mini" src="../../books-icon.jpg" />
          <List horizontal divided link size="small">
            <List.Item as="a" href="https://github.com/tcanbolat" target="_">
              <Icon name="github" />
              tcanbolat
            </List.Item>
            <List.Item
              as="a"
              href="https://github.com/tcanbolat/React-Google-Books-App"
              target="_"
            >
              <Icon name="code" />
              Source Code
            </List.Item>
            <List.Item>&copy; 2020</List.Item>
          </List>
        </Container>
      </Segment>
    </Container>
  );
}
