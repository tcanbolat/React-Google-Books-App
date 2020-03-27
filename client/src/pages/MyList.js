import React from "react";
import { Header, Segment, Container } from "semantic-ui-react";
const styles = {
    segment: {
        minHeight: 400,
        marginTop: 40
    }
  };
export default class MyList extends React.Component {
  render() {
    return (
      <Container>
        <Segment style={styles.segment}>
          <Header content="My List" />
        </Segment>
      </Container>
    );
  }
}
