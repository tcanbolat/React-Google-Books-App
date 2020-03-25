import React from 'react';
import {Container, Segment} from 'semantic-ui-react';
import './MainBody.css';
import SearchArea from '../SearchArea/SearchArea';
import ResultsBody from '../ResultsBody/ResultsBody';
const styles = {
    segment: {
        minHeight: 400,
        marginTop: 40
    },
    navimg: {
      marginRight: 15,
      marginBottom: 5
    },
    navbuttons: {
      margin: 10
    }
  };
export default function MainBody() {
    return (
        <Container>
            <Segment style={styles.segment}>
            <SearchArea />
            <ResultsBody />
            </Segment>

        </Container>
    );
};