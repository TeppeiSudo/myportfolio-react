import { Container, makeStyles, Typography } from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import EducationCard, { EducationCardType } from "../blocks/EducationCard";
import theme from "style/theme";

const useStyles = makeStyles({
  workcard: {
    maxWidth: "70vh",
  },
  content: {
    minHeight: "50vh",
  },
  timeline: {
    textAlign: "left",
    marginLeft: "-40vh",
  },
  offset: theme.mixins.toolbar,
  link: {
    color: "#61dafb",
  },
})

const Education = () => {
  const classes = useStyles();
  const bachelor: EducationCardType = {
    name: "Tokyo Intitute of Technology",
    year: "2016~2020",
    depart: "Electrical and Electronics",
    position: "Bachelor of Engineering",
    details: "",
    link: "#",
  };
  const master: EducationCardType = {
    name: "Tokyo Intitute of Technology",
    year: "2020~2022",
    depart: "Electrical and Electronics",
    position: "Master of Engineering",
    details: "",
    link: "#",
  };

  return (
    <Container maxWidth="lg" className={classes.content}>
      <div id="education" className={classes.offset} />
      <Typography variant="h3">education</Typography>
      <Timeline className={classes.timeline}>
        <EducationCard {...master} />
        <EducationCard {...bachelor} />
      </Timeline>
    </Container>
  );
};

export default Education;
