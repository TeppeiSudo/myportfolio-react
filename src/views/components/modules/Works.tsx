import { Container, Typography } from "@material-ui/core";
import useStyles from "style/style";

const Works = () => {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.content}>
      <div id="works" className={classes.offset} />
      <Typography variant='h3'>works</Typography>
    </Container>
  );
};

export default Works;
