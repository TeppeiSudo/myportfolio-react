import { AppBar, Toolbar, Typography, Box, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
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
            {"Works"}
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
