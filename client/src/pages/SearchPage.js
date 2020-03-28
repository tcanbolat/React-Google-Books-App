import React, { Component } from "react";
import { Container, Segment, Grid } from "semantic-ui-react";
import SearchArea from "../components/SearchArea/SearchArea";
import ResultsBody from "../components/ResultsBody/ResultsBody";
import API from "../utils/BooksApi";
const styles = {
  segment: {
    minHeight: 400,
    marginTop: 40
  }
};
export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      input: ""
    };
  }

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      input: value
    });
    console.log(value);
  };

  handleSearch = event => {
    event.preventDefault();
    API.BooksApi(this.state.input)
    .then(response =>
      // console.log(response.data.items)
       this.setState({
        results: response.data.items
      })
    )
    console.log(this.state.results);
    this.setState({
      input: ""
    })
  };

  render() {
    return (
      <Container>
        <Segment style={styles.segment}>
          <Grid>
            <SearchArea
              input={this.state.input}
              handleInputChange={this.handleInputChange}
              handleSearch={this.handleSearch}
            />
          </Grid>
          <ResultsBody results={this.state.results}/>
        </Segment>
      </Container>
    );
  }
}
