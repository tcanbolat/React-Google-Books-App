import React from "react";
import { Grid, Header, Input, Icon, Form } from "semantic-ui-react";
export default function SearchArea({ input, handleInputChange, handleSearch }) {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Header content="Search for a book" />
        <Form onSubmit={handleSearch}>
          <Input
            style={{ minWidth: 300 }}
            size="huge"
            icon={
              <Icon
                onClick={handleSearch}
                type="submit"
                name="search"
                circular={true}
                link={true}
                color="red"
              />
            }
            placeholder="Search..."
            onChange={handleInputChange}
            value={input}
          />
        </Form>
      </Grid.Column>
    </Grid>
  );
}
