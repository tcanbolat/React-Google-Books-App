import React from "react";
import axios from 'axios';
import { Segment, Header, Item, Label } from "semantic-ui-react";
import "./ResultsBody.css";

export default class ResultsBody extends React.Component {

  addToReadingList(Book) {
    console.log("addtoreadinglist executed");
    let bookObject = {};
    bookObject.bookid = Book.id;
    bookObject.image = Book.volumeInfo.imageLinks.thumbnail;
    bookObject.title = Book.volumeInfo.title;
    bookObject.authors = Book.volumeInfo.authors;
    bookObject.description = Book.volumeInfo.description;
    bookObject.previewLink = Book.volumeInfo.previewLink;
    console.log(bookObject);
    axios.post("/api/savebook", bookObject);
  } 

  render() {
    return (
      <Segment style={{ minHeight: 400 }}>
        <Header content="Results" />
        <Item.Group divided>
          {this.props.results.map(bookresults => (
            <Item key={bookresults.id}>
              <Item.Image src={bookresults.volumeInfo.imageLinks.thumbnail} />
              <Item.Content>
                <Item.Header as="a">{bookresults.volumeInfo.title}</Item.Header>
                <Item.Meta>
                  <span>{bookresults.volumeInfo.authors}</span>
                </Item.Meta>
                <Item.Description>
                  {bookresults.volumeInfo.description}
                </Item.Description>
                <Item.Extra>
                  <Label href={bookresults.volumeInfo.previewLink} target="_">
                    Preview Book
                  </Label>
                  <Label as="a"
                    onClick={()=> {this.addToReadingList(bookresults)}}
                    icon="save"
                    content="Add to reading list"
                  />
                </Item.Extra>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </Segment>
    );
  }
}
