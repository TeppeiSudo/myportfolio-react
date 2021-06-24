import { Container, Typography } from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import EducationCard from "../blocks/EducationCard";
import useStyles from "style/style";

const Education = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.content}>
      <div id="education" className={classes.offset} />
      <Typography variant="h3">education</Typography>
      <div className={classes.offset} />
      <Timeline className={classes.timeline}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <EducationCard />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <EducationCard />
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  );
};

export default Education;
