import React, { Component } from "react";
import { Grid, Header, Input } from "semantic-ui-react";
export default class SearchArea extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={12}>
          <Header content="Search for a book" />
          <Input
            size="huge"
            icon={{ name: "search", circular: true, link: true, color: "red" }}
            placeholder="Search..."
          />
        </Grid.Column>
      </Grid>
    );
  }
}
