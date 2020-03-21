import React, { Fragment } from "react";
import styles from "./Finder.styles";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  AppBar,
  Toolbar,
  makeStyles,
  Button
} from "@material-ui/core";
const useStyles = makeStyles(styles);

type Props = {
  data: any;
  handleClose: () => void;
};

const Details: React.FC<Props> = ({ data, handleClose }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <AppBar color="secondary">
        <Toolbar>
          <Typography
            variant="h4"
            onClick={handleClose}
            className={classes.backButton}
          >
            {"<"}
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid
        container
        className={classes.modalContent}
        spacing={1}
        justify={"flex-start"}
        direction="row"
      >
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {" "}
                Character{" "}
              </Typography>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                color="primary"
              >
                {data.name}
              </Typography>
              <Typography variant="body2" component="p">
                Birth Year: {data.birth_year}
              </Typography>
              <Typography variant="body2" component="p">
                Height: {data.height}
              </Typography>
              <Typography variant="body2" component="p">
                Mass: {data.mass}
              </Typography>
              <Typography variant="body2" component="p">
                Hair Color: {data.hair_color}
              </Typography>
              <Typography variant="body2" component="p">
                Eye Color: {data.eye_color}
              </Typography>
              <Typography variant="body2" component="p">
                Skin Color: {data.skin_color}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          container
          xs={12}
          lg={2}
          justify="flex-end"
          className={classes.backButton}
        >
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            onClick={handleClose}
            size="large"
          >
            Back
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Details;
