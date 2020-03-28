import React from "react";
import { Grid, Header, Input, Icon, Form, Button } from "semantic-ui-react";
export default function SearchArea({input, handleInputChange, handleSearch}) {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Header content="Search for a book" />
        <Form onSubmit={handleSearch}>
          <Input
            size="huge"
            icon={
              <Icon name="search" circular={true} link={true} color="red" />
            }
            onSubmit={handleSearch}
            placeholder="Search..."
            onChange={handleInputChange}
            value={input}
          />
          <Button type="submit">Search</Button>
        </Form>
      </Grid.Column>
    </Grid>
  );
}
