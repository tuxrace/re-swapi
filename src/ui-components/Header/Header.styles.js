export default (theme) => ({
  root: {
    '& > *': {
      margin: `${theme.spacing(2)}px auto`,
    },
    width: '100%',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
  }
});
