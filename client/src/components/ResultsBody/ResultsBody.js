import React from 'react';
import {Segment, Header} from 'semantic-ui-react';
import './ResultsBody.css';

export default function ResultsBody({results}) {
    return (
        <Segment style={{minHeight: 400}}>
            <Header content='Results' />
            {results.map(bookresults => (
                <div>{bookresults.volumeInfo.title}</div>
            ))}
        </Segment>
    );
};