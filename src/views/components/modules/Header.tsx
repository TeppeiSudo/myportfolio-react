import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  headername: {
    flexGrow: 1,
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" className={classes.headername}>
          Teppei Sudo's Portfolio
        </Typography>
        <Box>
          <Button color="inherit" href="/#">
            {"Top"}
          </Button>
          {/* <Button color='inherit' href='#aboutme'>
            {"About"}
          </Button> */}
          <Button color="inherit" href="/#skills">
            {"Skills"}
          </Button>
          <Button color="inherit" href="/#projects">
            {"Projects"}
          </Button>
          <Button color="inherit" href="/#works">
            {"Experience"}
          </Button>
          <Button color="inherit" href="/#education">
            {"Education"}
          </Button>
          {/* <Button color="inherit" href="/contact">
            {"Contact"}
          </Button> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
