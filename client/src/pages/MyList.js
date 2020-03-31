import React from "react";
import axios from "axios";
import { Header, Segment, Container, Item, Label } from "semantic-ui-react";
const styles = {
  segment: {
    minHeight: 400,
    marginTop: 40
  }
};

export default class MyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }
  componentDidMount() {
    axios.get("/api/mylist").then(response => {
      this.setState({
        results: response.data
      });
      console.log(this.state.results);
    });
  }
  render() {
    return (
      <Container>
        <Segment style={styles.segment}>
          <Header content="My List" />
          <Item.Group divided>
            {this.state.results.map(bookresults => (
              <Item key={bookresults.bookid}>
                <Item.Image src={bookresults.image} />
                <Item.Content>
                  <Item.Header as="a">
                    {bookresults.title}
                  </Item.Header>
                  <Item.Meta>
                    <span>{bookresults.authors}</span>
                  </Item.Meta>
                  <Item.Description>
                    {bookresults.description}
                  </Item.Description>
                  <Item.Extra>
                    <Label href={bookresults.previewLink} target="_">
                      Preview Book
                    </Label>
                    <Label
                      as="a"
                      icon="delete"
                      content="Delete Book"
                    />
                  </Item.Extra>
                </Item.Content>
              </Item>
            ))}
          </Item.Group>
        </Segment>
      </Container>
    );
  }
}
