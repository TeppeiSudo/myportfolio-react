import { Container, Typography } from "@material-ui/core";
import useStyles from "style/style";

const Education = () => {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.content}>
      <div id="education" className={classes.offset} />
      <Typography variant='h3'>education</Typography>
    </Container>
  );
};

export default Education;
