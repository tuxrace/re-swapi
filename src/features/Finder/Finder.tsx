import React, { useState } from "react";
import Grid from "@material-ui/core/Grid/Grid";
import PeopleList from "./PeopleList";
import PeopleSearch from "./PeopleSearch";
import debounce from "lodash/debounce";

const Finder = () => {
  const [search, setSearch] = useState(null);

  const debounced = debounce(e => {
    setSearch(e.target.value);
  }, 1000);

  const onChange = (e: any) => {
    // For uncontrolled components like material ui textbox
    e.persist();
    debounced(e);
  };

  return (
    <Grid container justify="flex-start" direction="column">
      <PeopleSearch onChange={onChange} />
      <PeopleList search={search} />
    </Grid>
  );
};

export default Finder;
