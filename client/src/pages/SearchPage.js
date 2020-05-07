import React, { Component } from "react";
import { Container, Segment, Grid } from "semantic-ui-react";
import SearchArea from "../components/SearchArea/SearchArea";
import ResultsBody from "../components/ResultsBody/ResultsBody";
import API from "../utils/BooksApi";
const styles = {
  segment: {
    minHeight: 400,
    marginTop: 40,
  },
};
export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      input: "",
    };
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      input: value,
    });
    console.log(value);
  };

  handleSearch = (event) => {
    event.preventDefault();
    API.BooksApi(this.state.input).then((response) => {
      var filteredItems = response.data.items.filter(function (book) {
        return !!book.volumeInfo.imageLinks;
      });
      const newArr = filteredItems.map((v) => ({
        ...v,
        color: "",
        content: "Add to reading list",
      }));
      this.setState({
        results: newArr,
      });
    });
    console.log(this.state.results);
    this.setState({
      input: "",
    });
  };

  updateResults = (updatedresults) => {
    this.setState({results: updatedresults});
  }

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
          <ResultsBody results={this.state.results} updateResults={this.updateResults}/>
        </Segment>
      </Container>
    );
  }
}
