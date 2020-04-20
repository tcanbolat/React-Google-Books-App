import React from "react";
import axios from 'axios';
import { Segment, Header, Item, Label } from "semantic-ui-react";
import "./ResultsBody.css";

export default class ResultsBody extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: "",
      content: "Add to reading list",
    }
    // this.handleError = this.handleError.bind(this);
  }


  // handleError(event) {
  //   console.log(event)
  //   this.setState({ color: "red", content: "already saved, go to your list"})
  // }

  // handleSuccess() {
  //   this.setState({ color: "green", content: "Saved book to you list!"})
  // }
 
  
  addToReadingList(Book) {
    console.log("addtoreadinglist executed");
    // console.log()
    let bookObject = {};
    bookObject.bookid = Book.id;
    bookObject.image = Book.volumeInfo.imageLinks.thumbnail;
    bookObject.title = Book.volumeInfo.title;
    bookObject.authors = Book.volumeInfo.authors;
    bookObject.description = Book.volumeInfo.description;
    bookObject.previewLink = Book.volumeInfo.previewLink;
    // console.log(bookObject);
    axios.post("/api/savebook", bookObject).then((res)=>  {
      console.log(res);
      if(res.data === "book already saved") {
        alert("book already saved!")
        // this.handleError();
      } else {
        alert("saved book!");
        // this.handleSuccess();
      }
    } )
  } 

  render() {
    const { color, content } = this.state
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
                    onClick={()=> {this.addToReadingList(bookresults)} }
                    icon="save"
                    content={content}
                    color={color}
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
