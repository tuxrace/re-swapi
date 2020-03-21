import React from "react";
import {
  Grid,
  LinearProgress,
  makeStyles,
  Typography
} from "@material-ui/core";
import InfiniteLoader from "react-window-infinite-loader";
import { FixedSizeList as List } from "react-window";
import styles from "./Finder.styles";
import withWidth from "@material-ui/core/withWidth";

const useStyles = makeStyles(styles);

const ListWrapper = ({
  hasNext,
  isLoading,
  list,
  loadNext,
  response,
  handleClickListItem,
  width
}: any) => {
  const itemCount = hasNext ? list.length + 1 : list.length;
  const loadMoreItems = isLoading ? () => {} : loadNext;
  const isItemLoaded = (index: number) => !hasNext || index < list.length;
  const isDesktop = width === "lg";
  const classes = useStyles();
  type Props = {
    index: number;
    style: any;
  };
  const Row: React.FC<Props> = ({ index, style }) => {
    let content;
    if (!isItemLoaded(index)) {
      content = (
        <Grid xs={11}>
          <LinearProgress variant="query" />
        </Grid>
      );
    } else {
      content = (
        <Grid
          xs={11}
          className={classes.row}
          onClick={() => handleClickListItem(index)}
        >
          {list[index].name}
        </Grid>
      );
    }
    return <div style={style}>{content}</div>;
  };

  return (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={itemCount}
      loadMoreItems={loadMoreItems}
    >
      {({ onItemsRendered, ref }) => (
        <Grid container direction="column" spacing={3}>
          <Grid item>
            <Typography variant="body1" color="primary">
              Scroll down to view all &darr; total: {response.count} current:{" "}
              {list.length}
            </Typography>
          </Grid>
          <Grid item>
            <List
              className="List"
              height={300}
              itemCount={itemCount}
              itemSize={50}
              onItemsRendered={onItemsRendered}
              ref={ref}
              width={isDesktop ? "108%" : "100%"}
            >
              {Row}
            </List>
          </Grid>
        </Grid>
      )}
    </InfiniteLoader>
  );
};

export default withWidth()(ListWrapper);
