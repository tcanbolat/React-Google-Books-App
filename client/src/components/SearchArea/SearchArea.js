import React, { Component } from "react";
import { Grid, Header, Input } from "semantic-ui-react";
import BooksApi from "../../utils/BooksApi";
export default class SearchArea extends Component {

  // componentDidMount() {
  //   API.BooksApi().then(answer => {
  //     console.log(answer.data.results);
  //     this.setState({ users: answer.data.results, searchedUser: answer.data.results });
  //   });
  // }
  render() {
    return (
      <Grid>
        <Grid.Column width={12}>
          <Header content="Search for a book" />
          <Input
            size="huge"
            icon={{ name: "search", circular: true, link: true, color: "red" }}
            placeholder="Search..."
            onClick={()=> console.log(BooksApi)}
          />
        </Grid.Column>
      </Grid>
    );
  }
}
