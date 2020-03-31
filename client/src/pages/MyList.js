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
      dbresults: []
    };
  }
  componentDidMount() {
    axios.get("/api/mylist").then(response => {
      this.setState({
        dbresults: response.data
      });
      console.log(this.state.dbresults);
    });
  }

  deleteBook(id) {
    console.log("deletebook executed");
    console.log(id);
    axios.delete("/api/mylist/" + id).then(this.componentDidMount());
  }

  render() {
    return (
      <Container>
        <Segment style={styles.segment}>
          <Header content="My List" />
          <Item.Group divided>
            {this.state.dbresults.map(bookresults => (
              <Item key={bookresults.bookid}>
                <Item.Image src={bookresults.image} />
                <Item.Content>
                  <Item.Header as="a">{bookresults.title}</Item.Header>
                  <Item.Meta>
                    <span>{bookresults.authors}</span>
                  </Item.Meta>
                  <Item.Description>{bookresults.description}</Item.Description>
                  <Item.Extra>
                    <Label href={bookresults.previewLink} target="_">
                      Preview Book
                    </Label>
                    <Label
                      as="a"
                      onClick={() => this.deleteBook(bookresults._id)}
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
