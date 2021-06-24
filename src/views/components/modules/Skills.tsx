import { Container, Typography, Grid } from "@material-ui/core";
import useStyles from "style/style";
import SkillCard, { SkillCardType } from "../blocks/SkillCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDocker } from "@fortawesome/free-brands-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  const classes = useStyles();
  const docker: SkillCardType = {
    font: <FontAwesomeIcon icon={ faDocker } />,
    name: "Docker",
    star: 2,
    details: "",
  };
  const python: SkillCardType = {
    font: <FontAwesomeIcon icon={ faPython } />,
    name: "Python",
    star: 5,
    details: '',
  };
  const go: SkillCardType = {
    font: <FontAwesomeIcon icon={ faGoogle } />,
    name: "Go",
    star: 3,
    details: '',
  };

  return (
    <Container maxWidth="lg" className={classes.content}>
      <div id="skills" className={classes.offset} />
      <Typography variant="h3">skills</Typography>
      <div className={classes.offset} />
      <Grid
        container
        spacing={2}
        xs={12}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <SkillCard {...python} />
        <SkillCard {...go} />
        <SkillCard {...docker} />
      </Grid>
    </Container>
  );
};

export default Skills;
