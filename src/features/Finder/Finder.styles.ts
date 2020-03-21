export default (theme: any) => ({
  row: {
    borderBottom: `#ccc 1px solid`,
    padding: theme.spacing(2, 1),
    "&:hover": {
      cursor: "pointer",
      boxShadow: `2px 2px 2px #ccc`,
      background: `#eee`
    }
  },
  modalContent: {
    background: `#eee`,
    marginTop: theme.spacing(5),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(7)
    },
    padding: theme.spacing(4, 2),
    height: "90%"
  },
  backButton: {
    height: theme.spacing(5),
    "&:hover": {
      cursor: "pointer"
    }
  }
});
