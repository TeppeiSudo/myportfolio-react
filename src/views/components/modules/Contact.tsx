import { Container, Typography } from "@material-ui/core";
import ContactButtons from "../blocks/ContactButtons";
import useStyles from "style/style";

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
