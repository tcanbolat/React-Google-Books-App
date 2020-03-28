import React from "react";
import {
  Segment,
  Header,
  Item,
  Label
} from "semantic-ui-react";
import "./ResultsBody.css";

export default function ResultsBody({ results }) {
  return (
    <Segment style={{ minHeight: 400 }}>
      <Header content="Results" />
      <Item.Group divided>
        {results.map(bookresults => (
          <Item key={bookresults.id}>
            <Item.Image  
            src={bookresults.volumeInfo.imageLinks.smallThumbnail}/>
            <Item.Content>
              <Item.Header as="a">{bookresults.volumeInfo.title}</Item.Header>
              <Item.Meta>
                <span>{bookresults.volumeInfo.authors}</span>
              </Item.Meta>
              <Item.Description>{bookresults.volumeInfo.description}</Item.Description>
              <Item.Extra>
                <Label href={bookresults.volumeInfo.previewLink}>Preview Book</Label>
                <Label icon="save" content="Add to reading list" />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
}
