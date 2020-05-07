import React from "react";
import axios from 'axios';
import { Segment, Header, Item, Label } from "semantic-ui-react";
import "./ResultsBody.css";

export default function ResultsBody ({results, updateResults}) {


  const handleError = (id) => { 
    const bookIndex = results.findIndex(b => {
      return b.id === id;
    });
        const book = {
      ...results[bookIndex]
    };
    book.color = 'red';
    book.content = "Book is already saved!";
    const newresults = [...results];
    newresults[bookIndex] = book;
   updateResults(newresults);
  };

  const handleSuccess = (id) => {
    const bookIndex = results.findIndex(b => {
      return b.id === id;
    });
        const book = {
      ...results[bookIndex]
    };
    book.color = 'green';
    book.content = "Added book to your reading list!";
    const newresults = [...results];
    newresults[bookIndex] = book;
   updateResults(newresults);
  }
 
  
  const addToReadingList = (Book) => {
    console.log("addtoreadinglist executed");
    let bookObject = {};
    bookObject.bookid = Book.id;
    bookObject.image = Book.volumeInfo.imageLinks.thumbnail;
    bookObject.title = Book.volumeInfo.title;
    bookObject.authors = Book.volumeInfo.authors;
    bookObject.description = Book.volumeInfo.description;
    bookObject.previewLink = Book.volumeInfo.previewLink;
    console.log(bookObject);
    axios.post("/api/savebook", bookObject).then((res)=>  {
      console.log(res);
      if(res.data === "book already saved") {
        const data = JSON.parse(res.config.data)
         handleError(data.bookid);
      } else {
        const data = JSON.parse(res.config.data)
        handleSuccess(data.bookid);
      } 
    } )
  }

    return (
      <Segment style={{ minHeight: 400 }}>
        <Header content="Results" />
        <Item.Group divided>
          {results.map(bookresults => (
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
                    onClick={()=> {addToReadingList(bookresults)} }
                    icon="save"
                    content={bookresults.content}
                    color={bookresults.color}
                  />
                </Item.Extra>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </Segment>
    );
}
