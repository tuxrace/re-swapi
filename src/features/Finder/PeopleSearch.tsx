import React from "react";
import { TextField } from "@material-ui/core";

const PeopleSearch = ({ onChange }: any) => {
  return (
    <TextField
      label="Search People"
      margin="normal"
      variant="outlined"
      type="search"
      onChange={onChange}
      placeholder="e.g. yoda"
    />
  );
};
export default PeopleSearch;
