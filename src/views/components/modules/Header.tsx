import { AppBar, Toolbar, Typography, Box, Button } from "@material-ui/core";
import useStyles from "style/style";

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" className={classes.headername}>
          Teppei Sudo's Portfolio
        </Typography>
        <Box>
          <Button color='inherit' href='#'>
            {"Top"}
          </Button>
          <Button color="inherit" href="#skills">
            {"Skills"}
          </Button>
          <Button color="inherit" href="#works">
            {"Experience"}
          </Button>
          <Button color="inherit" href="#education">
            {"Education"}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
