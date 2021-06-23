import { Container, Typography } from "@material-ui/core";
import useStyles from "style/style";

const Skills = () => {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.content}>
      <div id="skills" className={classes.offset} />
      <Typography variant="h3">skills</Typography>
    </Container>
  );
};

export default Skills;
