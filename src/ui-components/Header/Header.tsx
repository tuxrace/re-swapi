import React from "react";
import {
  Grid,
  Typography,
  makeStyles,
  Container,
  Link
} from "@material-ui/core";
import styles from "./Header.styles";
import Logo from '../../../src/assets/images/android-chrome-192x192.png'

const useStyles = makeStyles(styles);
const Header = () => {
  const classes = useStyles();
  return (
    <Grid container xs={12} className={classes.root}>
      <Container>
        <Grid container justify="flex-start" spacing={1} alignItems="center">
          <Grid item> <img src={Logo} width={48} alt="logo" /> </Grid>
          <Grid item> <Link href="/" color="inherit">
          <Typography variant="h6"> Star Wars People Finder </Typography>
        </Link> </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Header;
