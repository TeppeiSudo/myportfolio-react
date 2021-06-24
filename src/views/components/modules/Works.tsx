import { Container, Typography } from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import useStyles from "style/style";
import WorkCard from "../blocks/WorkCard";

const Works = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.content}>
      <div id="works" className={classes.offset} />
      <Typography variant="h3">works</Typography>
      <div className={classes.offset} />
      <Timeline className={classes.timeline}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h4">Now</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <WorkCard />
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  );
};

export default Works;
