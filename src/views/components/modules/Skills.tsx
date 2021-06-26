import { Container, Typography, Grid } from "@material-ui/core";
import useStyles from "style/style";
import SkillCard, { SkillCardType } from "../blocks/SkillCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDocker,
  faPython,
  faGoogle,
  faAws,
  faUbuntu,
  faLinux,
  faHtml5,
  faCss3,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  const classes = useStyles();
  const docker: SkillCardType = {
    font: <FontAwesomeIcon icon={faDocker} />,
    name: "Docker",
    star: 2,
    details: "",
    moredetails: "",
  };
  const python: SkillCardType = {
    font: <FontAwesomeIcon icon={faPython} />,
    name: "Python",
    star: 5,
    details: "Machine Learning, Competitive Programing, Web Scraping, ",
    moredetails: `Pyhotn is one of my favorite langage and 
    the first language I learned. 
    I always use in competitive programing contest and data science competition, 
    so I'm very good at writing pythonic code.`,
  };
  const go: SkillCardType = {
    font: <FontAwesomeIcon icon={faGoogle} />,
    name: "Go",
    star: 4,
    details: "",
    moredetails: "",
  };
  const sql: SkillCardType = {
    font: <FontAwesomeIcon icon={faDatabase} />,
    name: "SQL",
    star: 3,
    details: "",
    moredetails: "",
  };
  const aws: SkillCardType = {
    font: <FontAwesomeIcon icon={faAws} />,
    name: "AWS",
    star: 2,
    details: "",
    moredetails: "",
  };
  const linux: SkillCardType = {
    font: (
      <>
        <FontAwesomeIcon icon={faLinux} /> / <FontAwesomeIcon icon={faUbuntu} />
      </>
    ),
    name: "Linux",
    star: 3,
    details: "",
    moredetails: "",
  };
  const html: SkillCardType = {
    font: (
      <>
        <FontAwesomeIcon icon={faHtml5} /> / <FontAwesomeIcon icon={faCss3} />
      </>
    ),
    name: "HTML / CSS",
    star: 4,
    details: "",
    moredetails: "",
  };
  const js: SkillCardType = {
    font: <FontAwesomeIcon icon={faJs} />,
    name: "JavaScript",
    star: 2,
    details: "",
    moredetails: "",
  };
  const react: SkillCardType = {
    font: <FontAwesomeIcon icon={faReact} />,
    name: "React",
    star: 3,
    details: "",
    moredetails: "",
  };

  return (
    <Container maxWidth="lg" className={classes.content}>
      <div id="skills" className={classes.offset} />
      <Typography variant="h3">skills</Typography>
      <div className={classes.offset} />
      <Grid
        container
        spacing={4}
        xs={12}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <SkillCard {...python} />
        <SkillCard {...go} />
        <SkillCard {...docker} />
        <SkillCard {...sql} />
        <SkillCard {...aws} />
      </Grid>
      <Grid
        container
        spacing={4}
        xs={12}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <SkillCard {...linux} />
        <SkillCard {...html} />
        <SkillCard {...js} />
        <SkillCard {...react} />
      </Grid>
    </Container>
  );
};

export default Skills;
