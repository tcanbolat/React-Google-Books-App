import React from "react";
import { Grid, Header, Input, Icon } from "semantic-ui-react";
export default function SearchArea(handleInputChange) {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Header content="Search for a book" />
        <Input
          size="huge"
          icon={<Icon name="search" circular={true} link={true} color="red" />}
          placeholder="Search..."
          onChange={()=>handleInputChange}
        />
      </Grid.Column>
    </Grid>
  );
}
