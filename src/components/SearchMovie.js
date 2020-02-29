import React from "react";
import { InputGroup, Input } from "reactstrap";
export default function SearchMovie(props) {
  return (
    <div className="input-search">
      <InputGroup width="100%">
        <Input
          width="50%"
          placeholder="search by title"
          onChange={event => props.searchMovieByTitle(event.target.value)}
        />

        <Input
          type="number"
          style={{ marginLeft: "40px" }}
          placeholder="search by rating"
          onChange={event => props.searchMovieByRating(event.target.value)}
        />
      </InputGroup>
    </div>
  );
}
