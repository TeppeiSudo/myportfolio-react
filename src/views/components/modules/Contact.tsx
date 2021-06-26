import { Container, makeStyles, Typography } from "@material-ui/core";
import ContactButtons from "../blocks/ContactButtons";
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

const Contact = () => {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.content}>
      <div id="contact" className={classes.offset} />
      <Typography variant='h3'>contact</Typography>
      <ContactButtons />
    </Container>
  );
};

export default Contact;
