import React, { Component } from "react";
import { Container, Segment } from "semantic-ui-react";
import SearchArea from "../components/SearchArea/SearchArea";
import ResultsBody from '../components/ResultsBody/ResultsBody';
const styles = {
  segment: {
      minHeight: 400,
      marginTop: 40
  }
};
export default class SearchPage extends Component {
  state = {
    results: [],
    input: "",
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(value);
  };

  render() {
    return (
      <Container>
        <Segment style={styles.segment}>
          <SearchArea handleInputChange={this.handleInputChange}/>
          <ResultsBody />
        </Segment>
      </Container>
    );
  }
}
