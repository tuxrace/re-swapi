import React from "react";
import { Grid, Typography, makeStyles, Container } from "@material-ui/core";
import styles from "./Header.styles";

const useStyles = makeStyles(styles);
const Header = () => {
  const classes = useStyles();
  return (
    <Grid container xs={12} className={classes.root}>
      <Container>
        <Typography variant="h6"> Star Wars People Finder </Typography>
      </Container>
    </Grid>
  );
};

export default Header;
