import { AppBar, Toolbar, Typography, Box, Button } from '@material-ui/core';
import useStyles from 'style/style';

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant="h6" className={classes.header}>
            Teppei Sudo's Portfolio
        </Typography>
        <Box>
            <Button color="inherit">{"About Me"}</Button>
            <Button color="inherit">{"Works"}</Button>
            <Button color="inherit">{"Education"}</Button>
            <Button color="inherit">{"Contact"}</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header