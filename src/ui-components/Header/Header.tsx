import React from "react";
import {
  Grid,
  Typography,
  makeStyles,
  Container,
  Link
} from "@material-ui/core";
import styles from "./Header.styles";

const useStyles = makeStyles(styles);
const Header = () => {
  const classes = useStyles();
  return (
    <Grid container xs={12} className={classes.root}>
      <Container>
        <Link href="/" color="inherit">
          <Typography variant="h6"> Star Wars People Finder </Typography>
        </Link>
      </Container>
    </Grid>
  );
};

export default Header;
