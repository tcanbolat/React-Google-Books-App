import React from "react";
import { Container, Header, Segment, Button, Icon } from "semantic-ui-react";
import booksImg from "../../books-icon.jpg";
import "./navigation.css";
export default function Navigation() {
  return (
    <Container>
      <Segment clearing>
        <Header as="h1" floated="left">
          <img src={booksImg} alt="app logo" />
          Reading List
          <Header sub>Powered by <a href='https://books.google.com/' target='_'>google books</a></Header>
        </Header>
        <Header as="h2" floated="right">
          <Button size="big" inverted color="red" animated>
            <Button.Content hidden>Search</Button.Content>
            <Button.Content visible>
              <Icon name="search" />
            </Button.Content>
          </Button>
          <Button size="big" inverted color="blue" animated="vertical">
            <Button.Content hidden>My List</Button.Content>
            <Button.Content visible>
              <Icon name="list" />
            </Button.Content>
          </Button>
        </Header>
      </Segment>
    </Container>
  );
}
