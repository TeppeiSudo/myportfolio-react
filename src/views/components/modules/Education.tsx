import { Container, Typography } from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import EducationCard, { EducationCardType } from "../blocks/EducationCard";
import useStyles from "style/style";
import { getPositionOfLineAndCharacter } from "typescript";
import { TimelineOppositeContent } from "@material-ui/lab";

const Education = () => {
  const classes = useStyles();
  const bachelor: EducationCardType = {
    name: "Tokyo Intitute of Technology",
    year: "2016~2020",
    depart: "EE",
    position: "bachelor of Engineering",
    details: "",
    link: "learn more",
  };
  const master: EducationCardType = {
    name: "Tokyo Intitute of Technology",
    year: "2020~2022",
    depart: "EE",
    position: "master of Engineering",
    details: "",
    link: "learn more",
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
