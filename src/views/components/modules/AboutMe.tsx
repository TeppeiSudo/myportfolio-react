import { Container, makeStyles, Typography } from "@material-ui/core";
import theme from "style/theme";

const useStyles = makeStyles({
  content: {
    minHeight: "50vh",
  },
  offset: theme.mixins.toolbar,
  link: {
    color: "#61dafb",
  },
})

const AboutMe = () => {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.content}>
      <div id="aboutme" className={classes.offset} />
      <Typography variant='h3'>about me</Typography>
      <div className={classes.offset} />
      <Typography variant='body1'>I'm a software engineer.</Typography>
    </Container>
  );
};

export default AboutMe;
